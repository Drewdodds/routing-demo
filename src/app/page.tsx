import Link from "next/link";

export default function Home() {
    return (
    <>
    <h1>Welcome Drew's Page!</h1>;
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
    </>
    )
}