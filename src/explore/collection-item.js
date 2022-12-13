import { Link } from "react-router-dom";

import "./index.css";

const CollectionItem = ({ collection }) => {
  // Convert collection.name from spaces to dashes
  const decodedName = collection.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="card col-12 col-md-6 col-lg-4 col-xl-3 border-0">
      <Link
        to={`/shop/${decodedName}/1`}
        className="wd-hover-shadow text-decoration-none text-dark fw-semibold rounded-4"
      >
        <img src={collection.thumbnail_url} className="card-img-top border wd-top-rounded-corners" alt="..." />
        <div className="card-body border-start border-end border-bottom wd-bot-rounded-corners">
          <p className="card-text text-truncate text-center">{collection.name}</p>
        </div>
      </Link>
    </div>
  );
};
export default CollectionItem;
