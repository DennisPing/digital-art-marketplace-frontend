import { Button, Descriptions } from 'antd';

function ProductInfo({product}) {
  return (
      <div>
        {/*<Descriptions title="Product Info">*/}
        {/*  <Descriptions.Item label="Price"> {product.price}</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="Sold">{product.sold}</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="Creator"> {product.creator}</Descriptions.Item>*/}
        {/*  <Descriptions.Item label="Description"> {product.description}</Descriptions.Item>*/}
        {/*</Descriptions>*/}

        <ul className="list-group">
          <li className="list-group-item">
            <h6> Description </h6>
          </li>
          <li className="list-group-item">
            <h6> Price </h6>
          </li>
          <li className="list-group-item">
            <h6> Creator </h6>
          </li>
          <li className="list-group-item">
            <h6> Views </h6>
          </li>
        </ul>

        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary rounded-pill float-end">Add to Cart</button>
        </div>
      </div>
  )
}

export default ProductInfo