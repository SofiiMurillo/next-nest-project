"use client";

import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

export function ProductCard({product}: any) {
    const router = useRouter();

    async function handleRemoveProduct(id) {
        console.log(id);
        await deleteProduct(id);
        router.refresh();
    }

  return (
    <Card 
    onClick={() => {
        router.push(`/products/${product.id}`)
    }}
    className="w-full max-w-sm" key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between" >{product.name}
                <span className="text-sm font-bold text-gray-500 " >
                  ${product.price}
                </span>
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <img src={product.image} alt="" />
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter  className="flex justify-between" >
               <Button className="mt-5" 
               onClick={(e) => {
                e.stopPropagation();
                router.push(`/products/${product.id}/edit`)
               } }
               >Editar</Button>

               <Button className="mt-5" variant="destructive" 
               onClick={() => handleRemoveProduct(product.id)} >ELiminar</Button>

            </CardFooter>
          </Card>
  )
}
