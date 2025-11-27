import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProdcuts } from "./products/products.api";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
          <Card className="w-full max-w-sm" >
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
            <Button>Comprar</Button>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Homepage