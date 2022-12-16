import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../services/review/review-thunk";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateReview = () => {
  const { contractAddress, tokenId } = useParams();
  const dispatch = useDispatch();
  let [content, setContent] = useState("");
  // const { user } = useSelector((state) => state.user);

  const reviewClickHandler = () => {
    const newReview = {
      username: "hannahQin",
      // TODO: set username to currently logged-in user aka dynamic username
      content: content,
      contractAddress: contractAddress,
      tokenId: tokenId,
    };
    dispatch(createReviewThunk(newReview));
  };

  return (
    <div className="mt-2">
      <textarea
        value={content}
        placeholder="Write your own review"
        className="form-control border-0"
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <div>
        <button className="btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold" onClick={reviewClickHandler}>
          Post
        </button>
      </div>
    </div>
  );
};
export default CreateReview;
