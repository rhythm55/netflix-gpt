import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";
import { addUser, removeUser } from "../store/UserSlice";

const authStateChanged = (dispatch, navigate) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
};

export default authStateChanged;
