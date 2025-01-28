import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase.config";
import { getUserByEmail } from "@/firebase/FirebaseUser";
import { useInternetStatus } from "@/hooks/useInternetStatus";
import { useRouter } from "next/navigation";
import { steps } from "@/constants/AppConstants";
import { GetAllUserAdmins } from "@/firebase/FirebaseUser";
import { FaGalacticSenate } from "react-icons/fa6";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [guestUserModal, setGuestUserModal] = useState(false);
   const [bookingTableData, setBookingTableData ] = useState([])
   const [usersTableData, setUsersTableData ] = useState([])
   const [userAdminsData, setUserAdminsData ] = useState([])

  const [borkingServiceList, setBorkingServiceList] = useState([]);

  const [activeStep, setActiveStep] = useState(steps.step1);

  const [address, setAddress] = useState("");

  const [budget, setBudget] = useState();

  const [surveyTime, setSurveyTime] = useState(null);

  const [surveyDate, setSurveyDate] = useState(null);

  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullname] = useState("");

  const [bookingDetails, setBookingDetails] = useState({});
  const [notifications, setNotifications] = useState([])

  const isOnline = useInternetStatus();
  const router = useRouter();

  //  get user profile
  const [finishAccount, setFinishAccount] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("finishaccount");
      return storedValue ? JSON.parse(storedValue) : { isProfile: false };
    }
    return { isProfile: false };
  });

  useEffect(() => {
    if (!isOnline) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (typeof window === "undefined") return;
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        const admins = await GetAllUserAdmins()
        setUserAdminsData(admins[0]?.admins)

        try {
          const profile = await getUserByEmail(user?.email);
          localStorage.removeItem("finishaccount");
          if (profile) {
            setUserProfile(profile);
          } else {
            const finishAccountData = { isProfile: true };
            localStorage.setItem(
              "finishaccount",
              JSON.stringify(finishAccountData)
            );
            setFinishAccount(finishAccountData); // Sync with state
          }
        } catch (error) {
          console.error("Error fetching user profile: ", error.message);
        }
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("finishaccount");
        setUser({});
        setUserProfile({});
        setFinishAccount({ isProfile: false }); // Reset state
      }
    });

    return unsubscribe;
  }, []);

  // Determine if a user is authenticated
  const isUser = user !== null && user && Object.keys(user).length > 0;
  const isUserProfile =
    userProfile !== null && isUser && Object.keys(userProfile).length > 0;
  
   const isAdmin = userAdminsData?.length > 0 ? userAdminsData?.includes(auth?.currentUser?.email) : false


  const data = {
    user,
    setUser,
    isUser,
    isUserProfile,
    isAdmin,
    userProfile,
    setUserProfile,
    finishAccount,
    successAlert,
    setSuccessAlert,
    isBookingModalOpen,
    setIsBookingModalOpen,
    activeStep,
    setActiveStep,
    borkingServiceList,
    setBorkingServiceList,
    bookingDetails,
    setBookingDetails,
    setBudget,
    budget,
    setAddress,
    address,
    surveyTime,
    setSurveyTime,
    surveyDate,
    setSurveyDate,
    setNotes,
    notes,
    guestUserModal,
    setGuestUserModal,
    fullname, setFullname,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    notifications, setNotifications,
    bookingTableData, setBookingTableData,
    usersTableData, setUsersTableData,
    userAdminsData, setUserAdminsData
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
