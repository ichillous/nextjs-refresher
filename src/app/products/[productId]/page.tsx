export default function ProductDetails({params}: {
    params: {
        productId: string
    }
}) {
    return (
        <div>
            <h1>Product Details for product {params.productId}</h1>
        </div>
    );
}