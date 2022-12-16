import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CollectionGrid from "./collection-grid";
import { getCollectionsThunk } from "../services/collections/collections-thunk";

const ExploreComponent = () => {
  const { collections, loading } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollectionsThunk());
  }, [dispatch]);

  return (
    <div className="py-3">
      <h1 className="pt-5 fw-bold">Explore</h1>
      <h5 className="pb-5">Discover and collect unique art</h5>
      <CollectionGrid collections={collections} loading={loading} />
    </div>
  );
};

export default ExploreComponent;
