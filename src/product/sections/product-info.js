import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { getProductTransactionThunk } from "../../services/product/product-thunk";
import { addToCart } from "../../reducers/cart-reducer";
import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import ReactTooltip from "react-tooltip";

const ProductInfo = ({ product }) => {
  const { contractAddress, tokenId } = useParams();
  const { transaction } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductTransactionThunk({ contractAddress, tokenId }));
  }, [dispatch, contractAddress, tokenId]);

  const addToCartHandler = () => {
    const cartItem = {
      contractAddress: contractAddress,
      tokenId: tokenId,
      name: product.name,
      image: product.image,
      price: transaction.priceUsd,
    };
    dispatch(addToCart({ ...cartItem, quantity: 1 }));
  };

  return (
    <div className="mb-3">
      {/*<div className="d-flex justify-content-between h5">*/}
      {/*  <div className="p-2 text-primary">*/}
      {/*    {product.creator} <i className="bi bi-patch-check-fill px-2"/>*/}
      {/*  </div>*/}
      {/*  <div className="d-inline-flex">*/}
      {/*    <button className="btn" data-tip data-for="share">*/}
      {/*      <i className="bi bi-share-fill px-2"/>*/}
      {/*    </button>*/}
      {/*    <ReactTooltip id="share" place="top" effect="solid">*/}
      {/*      Share*/}
      {/*    </ReactTooltip>*/}

      {/*    <button className="btn" data-tip data-for="viewInFullScreen">*/}
      {/*      <i className="bi bi-fullscreen px-2"/>*/}
      {/*    </button>*/}
      {/*    <ReactTooltip id="viewInFullScreen" place="top" effect="solid">*/}
      {/*      View in full screen*/}
      {/*    </ReactTooltip>*/}

      {/*    <button className="btn" data-tip data-for="more">*/}
      {/*      <i className="bi bi-three-dots px-2"/>*/}
      {/*    </button>*/}
      {/*    <ReactTooltip id="more" place="top" effect="solid">*/}
      {/*      More*/}
      {/*    </ReactTooltip>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="h2 mb-3">{product.name}</div>

      <div className="border offer-border">
        <div className="px-3 py-3 border-bottom">
          <div className="mb-3 text-secondary">Description</div>
          <ReactMarkdown className="fw-600">{product.description}</ReactMarkdown>
        </div>
        <div className="px-3 py-3 border-bottom">
          <div className="mb-3 text-secondary">Chain</div>
          <div className="fw-600">{product.chain}</div>
        </div>
        <div className="px-3 py-3 border-bottom">
          <div className="mb-3 text-secondary">Standard token</div>
          <div className="fw-600">{product.tokenStandard}</div>
        </div>
        <div className="px-3 py-3">
          <div className="mb-3 text-secondary">Current price</div>
          <div className="mb-4 me-3 h2">{`$${transaction.priceUsd}`}</div>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-wide btn-primary btn-lg"
              disabled={`${user ? "" : "disabled"}`}
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
            <button
              type="button"
              className="mx-3 btn btn-wide btn-primary btn-lg"
              disabled={`${user ? "" : "disabled"}`}
            >
              Buy now <i className="bi bi-lightning-charge" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
