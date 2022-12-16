import {useDispatch, useSelector} from "react-redux";
import {getReviewsThunk} from "../../services/review/review-thunk";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import ReviewItem from "./review-item";


const ProductReviews = () => {
  const { contractAddress, tokenId } = useParams();
  const dispatch = useDispatch();
  const {reviews, loading} = useSelector(state => state.review);
  useEffect(() => {
    dispatch(getReviewsThunk({ contractAddress, tokenId }));
  }, [dispatch, contractAddress, tokenId]);


    return (
      <div className="mb-3">
        <ul className="list-group">
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {reviews.map(review => <ReviewItem review={review} key={review._id}/>)}
        </ul>
      </div>
    )
  }
export default ProductReviews;

