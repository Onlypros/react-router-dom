import { useParams } from "react-router-dom"

export default function PokemonDetails(props){
    
// pokemonId come from the route defintion
    // <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon}/>

    const { pokemonId } = useParams()
    // pokemonID is a string!!!
    // pokemonId will be whateve is in the url
    // localhost:5173/pokemon/1 -> 1
    // localhost:5173/pokemon/2 -> 2
    // localhost:5173/pokemon/3 -> 3

    const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId))
    
    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
                <dt>weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>
            </dl>
        </>
    )
};