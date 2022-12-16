import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../services/review/review-thunk";
import { useState } from "react";

const CreateReview = ({ contractAddress, tokenId, user }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const reviewClickHandler = () => {
    const newReview = {
      username: user.username,
      content: content,
      contractAddress: contractAddress,
      tokenId: tokenId,
    };
    dispatch(createReviewThunk(newReview));
    setContent("");
  };

  return (
    <div className="d-flex align-items-center my-3">
      <textarea
        value={content}
        placeholder="Write your own review"
        className="form-control rounded-4"
        onChange={(event) => setContent(event.target.value)}
      />
      <div className="">
        <button className="btn btn-primary rounded-4 ms-3 px-4 fw-bold" onClick={reviewClickHandler}>
          Post
        </button>
      </div>
    </div>
  );
};
export default CreateReview;
