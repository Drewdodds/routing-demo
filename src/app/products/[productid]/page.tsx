import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string}>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const productId = (await params).productId;
    return {
        title: `Product ${productId}`,
        description: `Product ${productId} details`,
    }
}

export default async function ProductDetail({ 
    params 
}: Props) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}