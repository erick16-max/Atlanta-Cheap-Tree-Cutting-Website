import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase.config";
import { getUserByEmail } from "@/firebase/FirebaseUser";
import { useInternetStatus } from "@/hooks/useInternetStatus";
import { useRouter } from "next/navigation";
import { steps } from "@/constants/AppConstants";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  
  const [borkingServiceList, setBorkingServiceList] = useState(() => {
    if(typeof window === undefined) return
    try {
      const storedList = localStorage.getItem("borkingServiceList");
      return storedList ? JSON.parse(storedList) : [];
    } catch (error) {
      console.error("Error parsing borkingServiceList from localStorage:", error);
      return [];
    }
  });
  
  const [activeStep, setActiveStep] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("activeStep") || steps.step1;
  });

  const [address, setAddress] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("address") || "";
  });

  const [budget, setBudget] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("budget") || "";
  })

  const [surveyTime, setSurveyTime] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("surveyTime") || "";
  })

  const [surveyDate, setSurveyDate] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("surveyDate") || "";
  })

  const [notes, setNotes] = useState(() => {
    if(typeof window === undefined) return
    return localStorage.getItem("notes") || "";
  })




  const [bookingDetails, setBookingDetails] = useState(() => {
    if(typeof localStorage === undefined) return
    try {
      const storedObj = localStorage.getItem("bookingDetails");
      return storedObj ? JSON.parse(storedObj) : {};
    } catch (error) {
      console.error("Error parsing borkingServiceList from localStorage:", error);
      return {};
    }
  });

  
  const isOnline = useInternetStatus()
  const router = useRouter()
  
  useEffect(() => {
    
    if(typeof  window === undefined) return

    localStorage.setItem("activeStep", activeStep);
    localStorage.setItem("borkingServiceList", JSON.stringify(borkingServiceList));
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    localStorage.setItem("address", address);
    localStorage.setItem("budget", budget);
    localStorage.setItem("surveyTime", surveyTime);
    localStorage.setItem("surveyDate", surveyDate);
    localStorage.setItem("notes", notes);
  }, [activeStep, borkingServiceList, bookingDetails, address, budget, surveyTime, surveyDate, notes]);

  //  get user profile
  const [finishAccount, setFinishAccount] = useState(() => {
    if (typeof window !== 'undefined') { 
        const storedValue = localStorage.getItem("finishaccount");
        return storedValue ? JSON.parse(storedValue) : { isProfile: false };
    }
    return { isProfile: false }; 
});

  useEffect(() => {
    if(!isOnline) return
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(typeof window === 'undefined') return
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
  
        try {
          const profile = await getUserByEmail(user?.email);
          if (profile) {
            setUserProfile(profile);
          } else {
            const finishAccountData = { isProfile: true };
            localStorage.setItem("finishaccount", JSON.stringify(finishAccountData));
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
  }, [router]);



  // Determine if a user is authenticated
  const isUser = user !== null && user && Object.keys(user).length > 0;
  const isUserProfile = userProfile !== null && isUser && Object.keys(userProfile).length > 0;


  const data = {
    user,
    setUser,
    isUser,
    isUserProfile,
    userProfile,
    setUserProfile,
    finishAccount,
    successAlert, 
    setSuccessAlert,
    isBookingModalOpen, 
    setIsBookingModalOpen,
    activeStep, setActiveStep,
    borkingServiceList, setBorkingServiceList,
    bookingDetails, setBookingDetails,
    setBudget, budget,
    setAddress, address,
    surveyTime, setSurveyTime,
    surveyDate, setSurveyDate,
    setNotes, notes
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
