import { Link } from "react-router-dom";

const CollectionComponent = () => {
  return (
    <div className="py-3">
      <h1>This is the Collection page</h1>
      <div className="list-group pt-4">
        <Link to="/product" className="list-group-item">
          Go to product 1
        </Link>
        <Link to="/product" className="list-group-item">
          Go to product 2
        </Link>
        <Link to="/product" className="list-group-item">
          Go to product 3
        </Link>
      </div>
    </div>
  );
};

export default CollectionComponent;
