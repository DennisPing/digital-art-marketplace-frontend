import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesByUserIdThunk } from "../../services/purchases/purchase-thunk";
import ShopItem from "../../shop/shop-item";

const Capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const CountTotalProducts = (mycollection) => {
  let total = 0;
  mycollection.forEach((purchase) => {
    total += purchase.products.length;
  });
  return total;
};

const MyCollectionComponent = () => {
  const { user, mycollection, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getPurchasesByUserIdThunk(user._id));
    }
  }, [dispatch, user]);

  return (
    <>
      {loading && <div>Loading...</div>}

      <div className="py-3">
        <h1 className="pt-5 fw-bold">{`${Capitalize(user.firstName)}'s Collection`}</h1>
        <h5 className="pb-5">{`You own ${CountTotalProducts(mycollection)} fine art pieces!`}</h5>
        <div className="row gy-5">
          {mycollection.map((purchase) =>
            purchase.products.map((product) => <ShopItem key={product._id} product={product} />)
          )}
        </div>
      </div>
    </>
  );
};

export default MyCollectionComponent;
