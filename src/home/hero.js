import { Link } from "react-router-dom";

const HeroComponent = () => {
  // This Hero component flexes vertically between xs to md. Then it flexes horizontally between lg and above.
  return (
    <>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="p-5">
          <h1 className="fw-bold">Explore, Buy, Collect Digital Art</h1>
          <div className="py-4">
            <Link to="/collection">
              <button className="btn btn-primary px-3 rounded-pill">Explore Collections</button>
            </Link>
          </div>
        </div>
        <div className="p-5">
          <img
            src="https://i.seadn.io/gae/XXB5mRLtt6lO3PGA413cOCI9jSi1Fe6FSLVVhdUkaaHVHLs_aOcFNMxIbI_xdXE1uZ5xe5M3SQxq_HOGCQ6gYeFTMYOktBimNCuWq_0?auto=format&w=1000"
            alt=""
            className="img-fluid rounded-5"
          />
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
