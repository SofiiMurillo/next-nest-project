'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { CardFooter } from "@/components/ui/card";
import { createProduct, updateProduct } from "../products.api";
import { useParams, useRouter } from "next/navigation";
import { parse } from "path"

export function ProductForm({product}: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
      image: product?.image,
    }
  });
  const router = useRouter();
  const params = useParams<{ id: string }>()
  console.log(params)


  const onSubmit = handleSubmit(async (data) => {
    if (params.id) { 
      await updateProduct(params.id, {
        ...data,
        price: parseFloat(data.price),
      })
      // Lógica para actualizar el producto
    } else {
      await createProduct({
        ...data,
        price: parseFloat(data.price),
      })
    }
    router.push("/");
    router.refresh()
  });
  return (

    <form onSubmit={onSubmit} >
      <div className="flex flex-col gap-6 w-full">
        <div className="grid gap-2">
          <Label htmlFor="productName">Nombre del Producto</Label>
          <Input
            {...register('name')}
            placeholder="LAPTOP PRO"
            required
          />

        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Descripción</Label>
          <Input
            {...register('description')}
            placeholder="Laptop portátil compacto, con pantalla integrada, teclado y batería."
            required
          />

        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Precio</Label>
          <Input
            {...register('price')}
            placeholder="$123456"
            required
          />

        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="image"> Imagen </Label>
          </div>
          <Input
            {...register('image')}
            placeholder="https://mi-imagen.com/imagen.jpg"
            required />
        </div>
      </div>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {
            params.id ? 'Actualizar Producto' : ' Crear Producto'
          }
        </Button>
      </CardFooter>
    </form>

  )
}





