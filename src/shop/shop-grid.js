import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ShopItem from "./shop-item";
import { getShopThunk } from "../services/shop/shop-thunk";

const ShopGrid = ({ collection, page }) => {
  const { shop, loading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopThunk({ contractAddress: collection.contractAddress, page: page }));
  }, [dispatch, collection.contractAddress, page]);

  return (
    <>
      {loading && <div>Loading...</div>}

      <div className="row gy-5">
        {shop.map((product) => (
          <ShopItem key={product.tokenId} product={product} />
        ))}
      </div>
    </>
  );
};

export default ShopGrid;
