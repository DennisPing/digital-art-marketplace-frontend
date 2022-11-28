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

        <div className="d-inline-flex item-counts p-2 mb-3">
          <div className="mt-2 me-3">
            <i className="bi bi-eye me-2"/>
            <span>{product.view} views</span>
          </div>
          <button className="btn">
            <i className="bi bi-heart me-2"/>
            <span>{product.like} likes</span>
          </button>
        </div>

        <div className="border offer-border">
          <div className="d-flex px-3 py-4 border-bottom">
            <i className="bi bi-clock me-3"/>
            <span className="fw-600">Sale ends December 25, 2022 at 5:09 AM GMT-8</span>
          </div>
          <div className="px-3 py-4">
            <div className="mb-3 text-secondary">Current price</div>
            <div className="mb-4 me-3 h3">0.04 ETH<span className=" px-3 text-secondary">{product.price}</span></div>
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
