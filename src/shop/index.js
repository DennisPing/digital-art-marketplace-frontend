import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import ShopGrid from "./shop-grid";
import { getShopThunk } from "../services/shop/shop-thunk";
// import { getCollectionsThunk } from "../services/collections/collections-thunk";

const ShopComponent = () => {
  const { encodedName } = useParams();

  // Dynamically fetch the collections and shop data from external API
  const { collections, loading } = useSelector((state) => state.collections);
  const collection = collections.filter((collection) => collection.encodedName === encodedName)[0];

  const { shop, shopLoading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopThunk({ encodedName: encodedName }));
  }, [dispatch, encodedName]);

  return (
    <>
      {loading && shopLoading && <div>Loading...</div>}

      <div className="py-3">
        <h1 className="pt-5 fw-bold">{collection.name}</h1>
        <ReactMarkdown className="pb-5">{collection.description}</ReactMarkdown>
        <ShopGrid shop={shop} />
      </div>
    </>
  );
};

export default ShopComponent;
