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
import { Close } from "@mui/icons-material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.config";

export default function AddPortfolioModal({ open, setOpen }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]); // Accept both image & video files
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    if (selected.length + files.length > 5) {
      alert("You can only upload up to 5 files!");
      return;
    }
    setFiles((prev) => [...prev, ...selected]);
  };

  const handleUpload = async () => {
    if (!title || !content || files.length === 0) {
      alert("Please fill in all fields and upload at least one file.");
      return;
    }

    setLoading(true);
    try {
      const uploadedMedia = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "portfolio");
          formData.append("cloud_name", "dt9oksrne");
          formData.append("resource_type", file.type.startsWith("video") ? "video" : "image");

          const uploadURL = file.type.startsWith("video")
            ? `https://api.cloudinary.com/v1_1/dt9oksrne/video/upload`
            : `https://api.cloudinary.com/v1_1/dt9oksrne/image/upload`;

          const response = await fetch(uploadURL, {
            method: "POST",
            body: formData,
          });

          const result = await response.json();
          return {
            url: result.secure_url,
            type: file.type.startsWith("video") ? "video" : "image",
          };
        })
      );

      await addDoc(collection(db, "portfolio"), {
        title,
        content,
        media: uploadedMedia, // not just images now
        createdAt: serverTimestamp(),
      });

      alert("Portfolio added successfully!");
      setOpen(false);
      setTitle("");
      setContent("");
      setFiles([]);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    }
    setLoading(false);
  };

  return (
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
      <Box width={400} bgcolor="white" p={3} borderRadius={2} boxShadow={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">Add Portfolio</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Stack>

        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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

        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
          style={{ marginTop: 10 }}
        />
        <Typography variant="body2">{files.length} / 5 files selected</Typography>

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
  );
}
