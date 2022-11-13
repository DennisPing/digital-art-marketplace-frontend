import { Link } from "react-router-dom";

const PromoItem = ({ promo }) => {
  return (
    // TODO: Add a link to the product page
    <Link to="" className="d-flex m-2 text-center position-relative justify-content-center">
      <div
        className="rounded-4"
        style={{
          height: 256,
          width: 256,
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 15%  , rgba(255, 255, 255, 0) 40%), url(${promo.image})`,
        }}
      ></div>
      <div className="position-absolute bottom-0 mb-2">
        <h6 className="text-white fw-bold my-0">{promo.collection}</h6>
        <h6 className="text-white small my-0">{promo.price}</h6>
      </div>
    </Link>
  );
};

export default PromoItem;
