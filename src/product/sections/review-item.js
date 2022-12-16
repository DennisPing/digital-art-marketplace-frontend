import "../index.css";

const ReviewItem = ({review}) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 text-secondary">
            {review.username}
          </div>
          <div className="col-10">
            {review.content}
          </div>
        </div>
      </li>
  )
}

export default ReviewItem;