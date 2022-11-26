// product summary

import product from "./product.json";
import ProductImage from "./sections/product-image";
import ProductInfo from "./sections/product-info";
import { Row, Col } from "antd";


const ProductComponent = () => {
  return (
      <div className="row mt-5">
        <div className="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <ProductImage product={product} />
        </div>
        <div className="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <ProductInfo product={product} />
        </div>
      </div>

  );
};

export default ProductComponent;
