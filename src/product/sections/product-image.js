import { getProductThunk } from "../../services/product/product-thunk";
import {useEffect} from "react";
import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactTooltip from "react-tooltip";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const ProductImage = () => {
  const { contractAddress, tokenId } = useParams();
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk({ contractAddress, tokenId}));
  }, [dispatch, contractAddress, tokenId]);

  return (
      <div className="border image-border">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        <div className="image-header d-flex flex-row-reverse">
          <button className="btn" data-tip data-for="likeThisItem">
            <i className="bi bi-heart me-2"/>
          </button>
          <ReactTooltip id="likeThisItem" place="top" effect="solid">
            Like this item
          </ReactTooltip>
        </div>
        <div>
          <img src={product.image} className="img-fluid" width="100%" alt="product_image"/>
        </div>
      </div>
  )

}
export default ProductImage;