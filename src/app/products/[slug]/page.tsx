import { getProductBySlug, getProducts, getRelatedProducts } from "@/lib/products";
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

    const product = await getProductBySlug(slug);

    if (!product) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold">
                    Product Not Found
                </h1>

            </main>
        );
    }

    const relatedProducts = await getRelatedProducts(
        product.categoryId,
        product.id
    );

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:py-10">

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
                        label: product.category.name,
                        href: `/shop?category=${product.category.slug}`
                    },
                    {
                        label: product.name
                    },
                ]}
            />

            
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                
                <ProductGallery
                    images={product.images.map((img) => img.url)}
                    name={product.name}
                />

                <div className="space-y-5 lg:space-y-6">
                    <ProductInfo product={product} />

                

                    <ProductActions 
                        id = {product.id}
                        name = {product.name}
                        image = {product.images[0]?.url ?? "/placeholder.png"}
                        price = {product.newPrice}
                    />
                    <ProductDelivery />

                </div>    
            </div>

            <RelatedProducts products={relatedProducts} />

        </main>
    );
}