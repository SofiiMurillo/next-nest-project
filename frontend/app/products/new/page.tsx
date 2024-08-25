import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {ProductForm} from './product-form'

function ProductsNewPage() {
  return (
    <Card className="w-full max-w-sm justify-center">
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
        <CardDescription>
          Llena todos los campos necesarios y crea un nuevo producto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm/>
      </CardContent>

    </Card>
  )
}
export default ProductsNewPage