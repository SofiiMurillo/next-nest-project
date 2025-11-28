import Link from "next/link";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string;
    }
}


async function ProductDetailPage({ params }: Props ) {
    const product = await getProduct(params.id);
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between" >
                        Detalles de {product.name}
                        <Link
                        className={buttonVariants()}
                        href="/"
                        >
                            Atras 
                        </Link>
                    </CardTitle>
                    
                    <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{product.price}</p>
                    <img src={product.image} alt="" className="w-full h-auto" />
                </CardContent>

            </Card>
        </div>
    )
}

export default ProductDetailPage