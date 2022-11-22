// product summary

import productArray from "./product.json";
import ProductImage from "./sections/product-image";
import ProductInfo from "./sections/product-info";
import { Row, Col } from "antd";

const ProductComponent = () => {
  return (
    <div className="container" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Smiling Ramen</h2>
      </div>
      <br />

      <Row gutter={[56, 40]}>
        <Col lg={12} xs={24}>
          {/*<ProductImage product={product} />*/}
          <img
            src="https://i.seadn.io/gae/j6RkDDwMIu5LyxWE7Upuc401Dy7oNIZ-U1_wsCmRH13Nu5y9KOhpuNQbxWj8ZPNpeYqS6A0xyYp-WQToiM03z5-f21GjvgNy1Q4OhUw?auto=format&w=512"
            className="img-fluid"
            alt="product_image"
          />
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo key={productArray[0].id} product={productArray[0]} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductComponent;
