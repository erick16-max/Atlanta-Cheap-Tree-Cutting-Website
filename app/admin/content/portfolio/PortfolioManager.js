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
  const {userProfile}  = useContext(AppContext)

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
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {portfolioItems.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.content}
                  </Typography>

                  <Grid container spacing={1}>
                    {item.media?.map((media, index) => (
                      <Grid item xs={6} key={index}>
                        {media.type === "video" ? (
                          <video
                            src={media.url}
                            controls
                            style={{ width: "100%", borderRadius: 4 }}
                          />
                        ) : (
                          <CardMedia
                            component="img"
                            height="140"
                            image={media.url}
                            alt={`media-${index}`}
                            sx={{ borderRadius: 1 }}
                          />
                        )}
                      </Grid>
                    ))}
                  </Grid>

                 {
                     userProfile?.isAdmin === true && (
                         <Grid
                    container
                    spacing={1}
                    justifyContent="flex-end"
                    sx={{ mt: 1 }}
                  >
                    <Grid item>
                      <IconButton onClick={() => handleEdit(item)} color="primary">
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
                     )
                 }
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editItem} onClose={() => setEditItem(null)} fullWidth>
        <DialogTitle>Edit Portfolio</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Content"
            fullWidth
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            margin="normal"
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
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
    </>
  );
}
