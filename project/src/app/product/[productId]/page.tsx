// export default function ProductDetails({ params }: { params: { productId: string } }) {
export default function ProductDetails({ params }) {
  return <h1>Product {params.productId} details page </h1>;
}
