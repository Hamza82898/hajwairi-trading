import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ProductDelivery from "@/components/product/ProductDelivery";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumb from "@/components/ui/Breadcrumb";



interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold">
                    Product Not Found
                </h1>

            </main>
        );
    }
    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            <Breadcrumb 
                items = {[
                    {
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Shop",
                        href: "/shop",
                    },
                    {
                        label: product.category,
                        href: `/shop?category=${product.category}`
                    },
                    {
                        label: product.name
                    },
                ]}
            />

            
            <div className="grid gap-10 lg:grid-cols-2">
                
                <ProductGallery
                    images={product.images}
                    name={product.name}
                />

                

                <div>
                    <ProductInfo product={product} />

                

                    <ProductActions />
                    <ProductDelivery />

                </div>    
            </div>

            <RelatedProducts 
                currentProduct={product}
                products={products}
            />

        </main>
    );
}