import PromoItem from "./promo-item";
import promoArray from "./promos.json";

const PromoList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {promoArray.map((promo) => (
        <PromoItem key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default PromoList;
