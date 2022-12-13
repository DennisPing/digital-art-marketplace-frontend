import { Link } from "react-router-dom";

const CollectionItem = ({ collection }) => {
  // Convert collection.name from spaces to dashes
  const decodedName = collection.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <Link to={`/shop/${decodedName}/1`} className="card w-25 justify-content-between">
        <img src={collection.thumbnail_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-center">{collection.name}</p>
        </div>
      </Link>
    </>
  );
};
export default CollectionItem;
