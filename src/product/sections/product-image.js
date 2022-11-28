function ProductImage({product}) {
  return (
      <div className="border image-border">
        <div className="image-header d-flex flex-row-reverse">
          <button className="btn">
            <i className="bi bi-heart me-2"/><span>{product.like}</span>
          </button>
        </div>
        <div>
          <img src={product.image} className="img-fluid" width="100%" alt="product_image"/>
        </div>
      </div>
  )

}
export default ProductImage;