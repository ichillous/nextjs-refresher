export default function ReviewDetail({params} : {
    params: {
        productId: string
        reviewId: string
    }
}) {
    return (
        <div>
            <h1>Product {params.reviewId}</h1>
            <h3>Product {params.productId}</h3>

        </div>
    );
}