
import {useState} from 'react'

const CreatePeople = () => {
    const initialState={name:''}
    const [people, setPeople] = useState(initialState)


    const changeHandler = (event)=>{
        const inputName = event.target.name
        const inputValue= event.target.value
        setPeople({
            ...people,
            [inputName]:inputValue
        })
    }

    const clickHandler = (event)=>{
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_RUTA}people`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(people)
            }
        ).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })

    }
  
    return (
        <>

                <input 
                    type="text" 
                    name="name"
                    value={people.name}
                    placeholder="Nombre2" 
                    onChange={changeHandler}></input>
                <input 
                    type="text" 
                    name="last"
                    value={people.last}
                    placeholder="Apellido2" 
                    onChange={changeHandler}></input>
        </>
    )
}

export default CreatePeople