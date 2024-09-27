
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PokemonForm(props){
   const [form, setForm] = useState({
        name: "",
        weight: "",
        height: "",
    });


    const navigate = useNavigate()

    function handleChange(e){

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
    
        // Assuming 'addPokemon' is a function passed via props or imported
        // Call the function from your app and pass the form data
        props.addPokemon(form); // Replace 'form' with the actual form data
    
        navigate('/pokemon'); // navigate taeks a client side route url (they are all )
        // Reset the form or handle further logic if needed
    }
    
   
    

    return (
        <>
            <h2>New Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' value={form.name} onChange={handleChange} />
                <label htmlFor="weight">Weight:</label>
                <input type="text" name='weight' id='weight' value={form.weight} onChange={handleChange} />
                <label htmlFor="height">Height:</label>
                <input type="text" name='height'  id='height' value={form.height} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}