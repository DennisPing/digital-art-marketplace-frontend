// Temporary landing page while React is deleting the user state

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { deleteUserThunk } from "../services/users/user-thunks";

const DeleteComponent = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteUserThunk(user));
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, [dispatch, user]);

  return (
    <div className="">
      <h1 className="fw-bold text-center py-4">Deleting Profile...</h1>
      <h5 className="text-secondary text-center">You will be redirected back to the home page</h5>
    </div>
  );
};

export default DeleteComponent;
