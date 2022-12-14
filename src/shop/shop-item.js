import { Link } from "react-router-dom";

import "./index.css";

const ShopItem = ({ product }) => {
  return (
    <div className="card col-3 border-0">
      <Link
        to={`/product/${product.contractAddress}/${product.tokenId}`}
        className="wd-hover-shadow text-decoration-none text-dark fw-semibold rounded-4"
      >
        <img src={product.image} className="card-img-top border wd-top-rounded-corners" alt="..." />
        <div className="card-body border-start border-end border-bottom wd-bot-rounded-corners">
          <p className="card-text text-truncate text-center">{product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShopItem;
