"use client"
import React, { useContext, useState } from 'react'
import { Modal, Typography, Box, Stack, TextField, CircularProgress, Button, Alert} from '@mui/material'
import PhoneNumberField from './CustomPhoneNumber'
import FinishProfileAccountImage from "../../public/finishprofile.svg"
import Image from 'next/image'
import ColorModeContext from '@/theme/CustomThemeProvider'
import { db } from '@/firebase.config'
import { addDoc, collection, getDocs, query, where, setDoc} from 'firebase/firestore'
import AppContext from '@/context/AppContext'


export default function FinishAccountModal() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [loading, setLoading] = useState(false)
    const {isMobile} = useContext(ColorModeContext)
    const {user, isUser, successAlert, setSuccessAlert} = useContext(AppContext)
    const [fullname, setFullname] = useState(() => isUser && user?.displayName ? user?.displayName : "")


    const finishAccount = JSON.parse(localStorage.getItem("finishaccount"))

 



    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        setLoading(true);
    
        if (!phoneNumber || !fullname) {
          setError("All fields are required");
          return;
        }
    
        const newUser = {
          displayName: fullname,
          email: user?.email,
          photoURL: user?.photoURL || "",
          phoneNumber: phoneNumber.replace(/[^\d]/g, ""),
          uid: user?.uid,
          isProfil: true,
        };
    
        // Reference to the 'users' collection
        const usersCollectionRef = collection(db, "users");
    
        // Query to check if a user with the same email exists
        const querySnapshot = await getDocs(
          query(usersCollectionRef, where("email", "==", user?.email))
        );
    
        if (!querySnapshot.empty) {
          // Update the existing user document
          const userDocRef = querySnapshot.docs[0].ref;
          await setDoc(userDocRef, newUser, { merge: true });
        } else {
          // Add a new user document if no existing user is found
          await addDoc(usersCollectionRef, newUser);
        }
    
        // Remove 'finishaccount' from localStorage after success
        localStorage.removeItem("finishaccount");
        setSuccessAlert(true);
    
        setTimeout(() => {
          setSuccessAlert(false); // Hide success alert after 4 seconds
        }, 4000);
      } catch (error) {
        console.error("Error adding/updating document: ", error);
        setError(error?.message || "Something went wrong -- Please try again!");
      } finally {
        setLoading(false);
    
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    };
    
    
  return (
    <Modal
        open={finishAccount?.isProfile || false}
    >
        <Box
            width={'100vw'}
            height={'100vh'}
            display={'flex'}
            bgcolor={'rgba(0,0,0, 0.6)'}
            justifyContent={'center'}
            alignItems={'center'}
        >
           <Box
            width={isMobile ? '96vw' : 500}
            bgcolor={'#ffffff'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            px={isMobile ? 3 : 5}
            py={3}
            gap={3}
            borderRadius={'12px'}
            component={'form'}
            onSubmit={handleSubmit}
           >

           <Stack
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            py={2}
           >
           <Image 
                src={FinishProfileAccountImage}
                alt='finish account'
                height={100}
            />
            <Typography
                variant='h5'
                fontWeight={700}
                color={'text.primary'}
                gutterBottom
            >
                Finish Creating Account
            </Typography>
           {error &&  <Alert severity='error' variant='filled'>{error}</Alert>}
           
           </Stack>

           {/* fullname field */}
    
           <TextField
        label="Fullnames"
        placeholder="Enter Fullname"
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
        fullWidth
        sx={{
          backgroundColor: "#eeeeee",
          borderRadius: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            "&.Mui-focused": {
              borderRadius: 3,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 3,
          },
          "& .MuiInputBase-root": {
            "&:autofill": {
              borderRadius: 3,
              boxShadow: "0 0 0 1000px #eeeeee inset",
            },
          },
        }}
        />

           {/* phone field */}
            <PhoneNumberField 
                label={'Phone Number'}
                setPhoneError={setPhoneError}
                setPhoneNumber={setPhoneNumber}
                phoneError={phoneError}
            />

<Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "none",
          fontWeight: 600,
          height: 50,
          borderRadius: "12px",
          "&.Mui-disabled": {
            backgroundColor: "primary.light",
          },
        }}
        type="submit"
        disabled={loading || phoneError || fullname === ""}
        
      >
        {loading ? (
          <CircularProgress thickness={4} size={25} sx={{ color: "#f5f5f5" }} />
        ) : (
          "Submit"
        )}
      </Button>

           </Box>
        </Box>
    </Modal>
  )
}
