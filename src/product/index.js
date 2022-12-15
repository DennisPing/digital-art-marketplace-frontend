import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductImage from "./sections/product-image";
import ProductInfo from "./sections/product-info";
import { getProductThunk } from "../services/product/product-thunk";

const ProductComponent = () => {
  const { contractAddress, tokenId } = useParams();
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk({ contractAddress, tokenId }));
  }, [dispatch, contractAddress, tokenId]);

  return (
    <>
      {loading && <div>Loading...</div>}

      <div className="row mt-5">
        <div className="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <ProductImage image={product.image} />
        </div>
        <div className="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <ProductInfo product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
