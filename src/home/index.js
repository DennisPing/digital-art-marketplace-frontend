import PromoList from "./promo-list";

const HomeComponent = () => {
  return (
    <div>
      <div className="bg-primary bg-opacity-10 py-4 rounded-4">
        <h1 className="d-flex justify-content-center fw-bold mb-4">Explore, buy, and sell NFT art</h1>
        <PromoList />
      </div>
    </div>
  );
};

export default HomeComponent;
