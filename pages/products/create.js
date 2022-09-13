
import {useState} from 'react'

export function Create(props) {
    
    const initialState={name:'',price: 0}
    const [product, setProduct] = useState(initialState)

    const changeHandler = (e) =>{
        const nameField  = e.target.name
        const valueField = e.target.value
        

        //setProduct({name:nameField, value:valueField})
        setProduct({
            ...product,
            [nameField]:valueField
        })

    }


    const clickHandler = (e) =>{
        console.log(product)
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_RUTA}products`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        }).then((res) =>{
            setProduct(initialState)
            console.log('ok1-f:',{res})
            return res.json()
        }).then((data) =>{
            console.log('data:',{data})
        }).catch(err =>{console.log(err)
        })

    }
    return (
        <>
          <h1>crear pdto</h1>  
                
        

            <input 

                type="text" 
                name="name" 
                value={product.name} 
                placeholder="Name5"
                onChange={changeHandler} >
            </input>
            <input 
                type="text"
                name="price" 
                value={product.price}
                placeholder="Price5"
                onChange={changeHandler} >
            </input>
            <button onClick={clickHandler}>Crear</button>
        


        </>
    )
}

export default Create