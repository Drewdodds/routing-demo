export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>Product Detail</h1>
        {children}
    </div>
}