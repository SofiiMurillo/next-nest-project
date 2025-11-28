import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ProductForm } from './product-form'
import { getProduct } from "../products.api"

interface Props {
  params: Promise<{
    id: string
  }>
  }

async function ProductsNewPage( props:  Props) {
  const {id} = await props.params
  const product = await getProduct(id)
  console.log(product)
  return (
    <Card className="w-full max-w-sm justify-center">
      <CardHeader>
        <CardTitle>
          {id ? 'Editar Producto' : 'Nuevo Producto'}
        </CardTitle>
        <CardDescription>
          Llena todos los campos necesarios y crea un nuevo producto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm product={product} />
      </CardContent>

    </Card>
  )
}
export default ProductsNewPage