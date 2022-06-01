import {
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../actions/auth";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const EditProfileLandlord = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");

  const { message } = useSelector((state) => state.message);

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setFullname(user.user.fullname);
      setEmail(user.user.email);
      setUsername(user.user.username);
      setMobile(user.user.mobile_phone);
    }
  }, [user]);

  const { openPopup, setOpenPopup } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ fullname, email, username, mobile })).then(() => {
      window.location.reload();
    });
    console.log(fullname);
  };

  const handleClose = () => {
    setOpenPopup(false);
    window.location = "/account";
  };

  return (
    <>
      <Dialog
        open={openPopup}
        onBackdropClick={() => setOpenPopup(false)}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <DialogContentText>Edit Profile</DialogContentText>
            {success && <Alert severity="success">{success}</Alert>}
            {message && <Alert severity="error">{message}</Alert>}
            {loading && <Loading />}
            <TextField
              required
              autoFocus
              margin="normal"
              type="text"
              inputProps={{ minLength: 2 }}
              fullWidth
              label="Fullname"
              variant="standard"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              required
              autoFocus
              margin="normal"
              type="text"
              inputProps={{ minLength: 2 }}
              fullWidth
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              autoFocus
              margin="normal"
              type="text"
              label="Username"
              inputProps={{ minLength: 2 }}
              fullWidth
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              autoFocus
              margin="normal"
              type="text"
              label="Mobile phone"
              inputProps={{ minLength: 2 }}
              fullWidth
              variant="standard"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              sx={{ background: "#2bc66a" }}
              variant="contained"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EditProfileLandlord;
