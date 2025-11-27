import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProdcuts } from "./products.api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

async function Homepage() {
  const products = await getProdcuts()

  return (
    <>
      <div className="flex justify-between" >
        <h1
          className="text-4xl font-bold "
        >NextNestApp</h1>

        <Link
          href="/products/new"
          className={buttonVariants()}
        >
          Create Product
        </Link>

      </div>


      <div>
        {products.map((product) => (
          <Card className="w-full max-w-sm" key={product.id}>
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
               <Button className="mt-5" >Comprar</Button>

               <Button className="mt-5" variant="destructive"  >ELiminar</Button>

            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Homepage