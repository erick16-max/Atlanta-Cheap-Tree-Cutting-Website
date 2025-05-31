import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Tooltip,
  Box,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";
import AppContext from "@/context/AppContext";

export default function PortfolioManager() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [updating, setUpdating] = useState(false);
  const { userProfile } = useContext(AppContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchPortfolio = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "portfolio"));
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPortfolioItems(items);
    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    await deleteDoc(doc(db, "portfolio", id));
    fetchPortfolio();
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setEditTitle(item.title);
    setEditContent(item.content);
  };

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      await updateDoc(doc(db, "portfolio", editItem.id), {
        title: editTitle,
        content: editContent,
      });
      setEditItem(null);
      fetchPortfolio();
    } catch (err) {
      alert("Failed to update portfolio.");
      console.error(err);
    }
    setUpdating(false);
  };

  return (
    <>
      {loading ? (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} mt={1}>
          {portfolioItems.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>

                  <Tooltip title={item.content} placement="top">
                    <Typography
                      variant="body2"
                      sx={{
                        maxHeight: 60,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        mb: 2,
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Tooltip>

                  <Grid container spacing={1}>
                    {item.media?.map((media, index) => (
                      <Grid item xs={6} key={index}>
                        {media.type === "video" ? (
                          <video
                            src={media.url}
                            controls
                            style={{
                              width: "100%",
                              borderRadius: 10,
                              objectFit: "cover",
                              height: 150,
                            }}
                          />
                        ) : (
                          <CardMedia
                            component="img"
                            height="140"
                            image={media.url}
                            alt={`media-${index}`}
                            sx={{ borderRadius: 1, cursor: "pointer" }}
                            onClick={() => setSelectedImage(media.url)}
                          />
                        )}
                      </Grid>
                    ))}
                  </Grid>

                  {userProfile?.isAdmin === true && (
                    <Grid
                      container
                      justifyContent="flex-end"
                      spacing={1}
                      mt={2}
                    >
                      <Grid item>
                        <IconButton
                          onClick={() => handleEdit(item)}
                          color="primary"
                        >
                          <Edit />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => handleDelete(item.id)}
                          color="error"
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Edit Dialog */}
      <Dialog
        open={!!editItem}
        onClose={() => setEditItem(null)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Portfolio</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            margin="dense"
          />
          <TextField
            label="Content"
            fullWidth
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            margin="dense"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setEditItem(null)}>Cancel</Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            color="primary"
            disabled={updating}
          >
            {updating ? <CircularProgress size={20} /> : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
      >
        <img
          src={selectedImage}
          alt="Preview"
          style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
        />
      </Dialog>
    </>
  );
}
