import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductImage from "./sections/product-image";
import ProductInfo from "./sections/product-info";
import ProductReviews from "./sections/product-reviews";
import { getProductThunk } from "../services/product/product-thunk";
import CreateReview from "./sections/create-review";

const ProductComponent = () => {
  const { contractAddress, tokenId } = useParams();
  const { product, loading } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk({ contractAddress, tokenId }));
  }, [dispatch, contractAddress, tokenId]);

  return (
    <>
      {loading && <div>Loading...</div>}
      <div>
        <div className="row mt-5">
          <div className="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <ProductImage image={product.image} />
          </div>
          <div className="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <ProductInfo product={product} contractAddress={contractAddress} tokenId={tokenId} user={user} />
          </div>
        </div>
        <div className="mb-3">
          <h2>Reviews</h2>
          {/* Only render create review if a user is logged in */}
          {user && user.userType !== "free" && (
            <CreateReview contractAddress={contractAddress} tokenId={tokenId} user={user} />
          )}
          {user.userType === "free" && (
            <h5 className="pb-2 text-secondary">You must be a Premium member to write reviews</h5>
          )}
          <ProductReviews contractAddress={contractAddress} tokenId={tokenId} />
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
