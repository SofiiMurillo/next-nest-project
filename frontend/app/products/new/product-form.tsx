'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {useForm} from "react-hook-form"
import { CardFooter } from "@/components/ui/card";
import { createProduct } from "../products.api";
import { useRouter } from "next/navigation";

export function ProductForm() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    await createProduct({
        ...data,
        price: parseFloat(data.price),
    });
    router.push("/")
    router.refresh()
    });
  return (

    <form onSubmit={onSubmit} >
          <div className="flex flex-col gap-6 w-full">
            <div className="grid gap-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input
                {...register('name')}
                placeholder="LAPTOP PRO"
                required
              />
              
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                {...register('description')}
                placeholder="pequeña descripcion sobre el producto creado."
                required
              />
              
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                {...register('price')}
                placeholder="$123456"
                required
              />
              
            </div>
            
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="image"> Image </Label>
              </div>
              <Input 
              {...register('image')}
              placeholder="Url de la imagen que deseas poner"
              required />
            </div>
          </div>
                <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
        Crear producto
        </Button>
      </CardFooter>
</form>
    
  )
}





