import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CollectionItem from "./collection-item";
import { getCollectionsThunk } from "../services/collections/collections-thunk";

// import collections from "../collections.json";

const CollectionGrid = () => {
  const { collections, loading } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollectionsThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <div>Loading...</div>}

      <div className="row gy-5">
        {collections.map((collection) => (
          <CollectionItem key={collection.contractAddress} collection={collection} />
        ))}
      </div>
    </>
  );
};
export default CollectionGrid;
