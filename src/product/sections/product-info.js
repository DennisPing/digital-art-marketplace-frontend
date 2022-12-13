import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactTooltip from "react-tooltip";


function ProductInfo({product}) {
  return (
      <div>
        <div className="d-flex justify-content-between h5">
          <div className="p-2 text-primary">
            {product.creator} <i className="bi bi-patch-check-fill px-2"/>
          </div>
          <div className="d-inline-flex">
            <button className="btn" data-tip data-for="share">
              <i className="bi bi-share-fill px-2"/>
            </button>
            <ReactTooltip id="share" place="top" effect="solid">
              Share
            </ReactTooltip>

            <button className="btn" data-tip data-for="viewInFullScreen">
              <i className="bi bi-fullscreen px-2"/>
            </button>
            <ReactTooltip id="viewInFullScreen" place="top" effect="solid">
              View in full screen
            </ReactTooltip>

            <button className="btn" data-tip data-for="more">
              <i className="bi bi-three-dots px-2"/>
            </button>
            <ReactTooltip id="more" place="top" effect="solid">
              More
            </ReactTooltip>
          </div>
        </div>

        <div className="d-flex p-2 pb-0 fw-bolder h2">
          {product.creator} #{product.id}
        </div>

        <div className="d-flex p-2 pt-0 fw-bold mb-3 h6">
          <div className="me-2">Owned by</div>
          <div className="text-primary fw-bolder">{product.owner}</div>
        </div>

        <div className="d-inline-flex item-counts mb-3">
          <button className="btn" data-tip data-for="likeThisItem">
            <i className="bi bi-heart me-2"/>
            <span>{product.like} likes</span>
          </button>
          <ReactTooltip id="likeThisItem" place="top" effect="solid">
            Like this item
          </ReactTooltip>
        </div>

        <div className="border offer-border">
          <div className="px-3 py-3 border-bottom">
            <div className="mb-3 text-secondary">Title</div>
            <div className="fw-600">{product.title}</div>
          </div>
          <div className="px-3 py-3 border-bottom">
            <div className="mb-3 text-secondary">Collection</div>
            <div className="fw-600">{product.collection}</div>
          </div>
          <div className="px-3 py-3 border-bottom">
            <div className="mb-3 text-secondary">Description</div>
            <div className="fw-600">{product.description}</div>
          </div>
          <div className="px-3 py-3 border-bottom">
            <div className="mb-3 text-secondary">Current price</div>
            <div className="mb-4 me-3 h2">{product.price}</div>
            <div className="d-flex">
              <button type="button" className="btn btn-wide btn-primary btn-lg">
                Add to cart
              </button>
              <button type="button" className="mx-3 btn btn-wide btn-primary btn-lg">
                Buy now <i className="bi bi-lightning-charge"/>
              </button>
            </div>
          </div>
        </div>

      </div>
  );
}

export default ProductInfo;
