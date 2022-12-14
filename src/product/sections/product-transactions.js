import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import "../index.css";
import {getProductTransactionThunk} from "../../services/product/product-thunk";

const ProductTransactions = () => {
  const { contractAddress, tokenId } = useParams();
  const transactions = useSelector((state) => state.product.transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductTransactionThunk({ contractAddress, tokenId}));
  }, [dispatch, contractAddress, tokenId]);

  console.log(transactions);

  // return (
  //     <div className="border offer-border mt-5">
  //       {/*{*/}
  //       {/*    loading &&*/}
  //       {/*    <li className="list-group-item">*/}
  //       {/*      Loading...*/}
  //       {/*    </li>*/}
  //       {/*}*/}
  //       <div className="px-3 py-3">
  //         <div className="mb-3 text-secondary">Current price</div>
  //         <div className="mb-4 me-3 h2">{transactions[0].price}</div>
  //         <div className="d-flex">
  //           <button type="button" className="btn btn-wide btn-primary btn-lg">
  //             Add to cart
  //           </button>
  //           <button type="button" className="mx-3 btn btn-wide btn-primary btn-lg">
  //             Buy now <i className="bi bi-lightning-charge"/>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  // )
}

export default ProductTransactions;