import "../index.css";

const ReviewItem = ({ review }) => {
  return (
    <li className="list-group-item">
      <div className="row mx-1">
        <div className="col-2 fw-bold">{review.username}</div>
        <div className="col-10">{review.content}</div>
      </div>
    </li>
  );
};

export default ReviewItem;
