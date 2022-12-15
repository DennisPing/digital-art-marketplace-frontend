import ShopItem from "./shop-item";

const ShopGrid = ({ shop }) => {
  return (
    <>
      <div className="row gy-5">
        {shop.map((product) => (
          <ShopItem key={product.tokenId} product={product} />
        ))}
      </div>
    </>
  );
};

export default ShopGrid;
