import HeroComponent from "./hero";

const HomeComponent = () => {
  return (
    <div>
      <HeroComponent />
      <div className="">
        <h2 className="d-block text-center fw-bold">Discover new art collections</h2>
        <h5 className="d-block text-center text-secondary fw-bold">Pay with Ethereum or USD</h5>
        <h5 className="d-block text-center text-secondary fw-bold">
          Dennis plans on making a carousel so that the homepage image can auto scroll between multiple images.
        </h5>
        <h5 className="d-block text-center text-secondary fw-bold">
          Please think of other things to put here to fill up vertical space!
        </h5>
      </div>
    </div>
  );
};

export default HomeComponent;
