import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Stack,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.config";

export default function AddPortfolioModal({open, setOpen}) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("You can only upload up to 5 images!");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleUpload = async () => {
    if (!title || !content || images.length === 0) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }
  
    setLoading(true);
    try {
      const uploadedImageUrls = await Promise.all(
        images.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "portfolio"); // Replace with your Cloudinary upload preset
          formData.append("cloud_name", "dt9oksrne");
  
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dt9oksrne/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
  
          const result = await response.json();
          return result.secure_url; // Get the uploaded image URL
        })
      );
  
      await addDoc(collection(db, "portfolio"), {
        title,
        content,
        images: uploadedImageUrls,
        createdAt: serverTimestamp(),
      });
  
      alert("Portfolio added successfully!");
      setOpen(false);
      setTitle("");
      setContent("");
      setImages([]);
    } catch (error) {
      console.error("Error uploading: ", error);
      alert("Upload failed. Please try again.");
    }
    setLoading(false);
  };
  

  return (
    <>
     
      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Box
          width={400}
          bgcolor="white"
          p={3}
          borderRadius={2}
          boxShadow={3}
          sx={{ textAlign: "center" }}
        >
          {/* Modal Header */}
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">Add Portfolio</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Stack>

          {/* Title Field */}
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Content Field */}
          <TextField
            label="Content"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ marginTop: 10 }}
          />
          <Typography variant="body2">
            {images.length} / 5 images selected
          </Typography>

          {/* Upload Button */}
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Upload"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
