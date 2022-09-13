
import {useState} from 'react'

const create = () => {
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
        fetch(`${process.env.PATH}people`, {
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
                    placeholder="Nombre" 
                    onChange={changeHandler}></input>
                <input 
                    type="text" 
                    name="last"
                    value={people.last}
                    placeholder="Apellido" 
                    onChange={changeHandler}></input>
        </>
    )
}

export default create