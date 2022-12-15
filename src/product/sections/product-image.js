import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactTooltip from "react-tooltip";

const ProductImage = ({ image }) => {
  return (
    <div className="border image-border">
      <div className="image-header d-flex flex-row-reverse">
        <button className="btn" data-tip data-for="likeThisItem">
          <i className="bi bi-heart me-2" />
        </button>
        <ReactTooltip id="likeThisItem" place="top" effect="solid">
          Like this item
        </ReactTooltip>
      </div>
      <div>
        <img src={image} className="img-fluid" width="100%" alt="product_image" />
      </div>
    </div>
  );
};
export default ProductImage;
