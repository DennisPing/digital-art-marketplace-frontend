import ReactTooltip from "react-tooltip";

function ProductImage({product}) {
  return (
      <div className="border image-border">
        <div className="image-header d-flex flex-row-reverse">
          <button className="btn" data-tip data-for="likeThisItem">
            <i className="bi bi-heart me-2"/><span>{product.like}</span>
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