//Aqui se definen las funciones que se van a pedir hacia el api

    export async function getProdcuts() {
        const data = await fetch("http://localhost:4000/api/products")
        return await data.json();     
    }





 export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json()
    console.log(data)
 }