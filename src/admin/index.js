import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPurchasesThunk } from "../services/purchases/purchase-thunk";
import PurchaseItem from "./purchase-item";

const AdminComponent = () => {
  const { user, mycollection, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [dispatch]);

  return (
    <>
      {user && user.userType !== "admin" && <h1>401 Forbidden</h1>}

      {loading && <div>Loading...</div>}

      {user && user.userType === "admin" && (
        <div className="py-3">
          <h1 className="py-5 fw-bold">All Transactions</h1>
          <div className="list-group">
            {mycollection.map((purchase) => (
              <PurchaseItem key={purchase._id} purchase={purchase} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminComponent;
