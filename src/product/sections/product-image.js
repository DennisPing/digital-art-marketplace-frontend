function ProductImage({product}) {
  return (
      <div className="mb-2">
        <img src={product.image} className="img-fluid" alt="product_image"/>
        {/*some details below maybe*/}
      </div>
  )

}
export default ProductImage;