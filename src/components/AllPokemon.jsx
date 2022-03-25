import pokes from "../pokes";
import forms from "../forms";
import PokeTable from "./PokeTable.jsx";

function AllPokemon() {

    return (
        <div>
            <PokeTable pokemonToAdd={pokes} formsToAdd={forms} height={700} pageSize={10} rowsPerPage={20} />
        </div>
    );

}
export default AllPokemon;