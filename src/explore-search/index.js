import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import CollectionGrid from "../explore/collection-grid";
import { searchCollectionsThunk } from "../services/collections/collections-thunk";

// This is very similar to the ExploreComponent, but it only displays the search results
const ExploreSearchComponent = () => {
  const { state } = useLocation();
  const search = state.search;

  const { collections, loading } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchCollectionsThunk(search));
  }, [dispatch, search]);

  return (
    <div className="py-3">
      <h1 className="pt-5 fw-bold">Explore</h1>
      <h5 className="pb-5">Discover and collect unique art</h5>
      <CollectionGrid collections={collections} loading={loading} />
    </div>
  );
};

export default ExploreSearchComponent;
