import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

function PokeTable(props) {
    const columns = [
    {
        field: "id",
        headerName: "",
        width: 70,
        sortable: false,
        align: "left",
        renderCell: (params) => (
        <img
            src={"https://www.serebii.net/pokedex-swsh/icon/" + params.id + ".png"}
            alt="pokelogo"
        />
        )
    },
    {
        field: "name",
        headerName: "name",
        type: "string",
        width: 130,
        sortable: false,
        align: "left"
    },
    {
        field: "type",
        headerName: "type",
        width: 90,
        align: "left",
        sortable: false,
        renderCell: (param) => (
        <img className="typeIcon" src={"/imgs/types/" + param.value + ".png"} alt={param.value} />
        )
    },
    {
        field: "type2",
        headerName: "type 2",
        width: 90,
        align: "left",
        sortable: false,
        renderCell: (params) => (
        <img className="typeIcon" src={"/imgs/types/" + params.value + ".png"} alt={params.value} />
        )
    },
    {
        field: "ability",
        headerName: "ability",
        sortable: false,
        width: 150,
        align: "left"
    },
    {
        field: "ability2",
        headerName: "ability 2",
        sortable: false,
        width: 150,
        align: "left"
    },
    {
        field: "ha",
        headerName: "hidden ability",
        sortable: false,
        width: 150,
        align: "left"
    },
    {
        field: "hp",
        headerName: "HP",
        sortable: true,
        width: 80,
        align: "left"
    },
    {
        field: "atk",
        headerName: "attack",
        sortable: true,
        width: 80,
        align: "left"
    },
    {
        field: "def",
        headerName: "defense",
        sortable: true,
        width: 80,
        align: "left"
    },
    {
        field: "spa",
        headerName: "sp. atk",
        sortable: true,
        width: 80,
        align: "left"
    },
    {
        field: "spd",
        headerName: "sp. def",
        sortable: true,
        width: 80,
        align: "left"
    },
    {
        field: "spe",
        headerName: "speed",
        sortable: true,
        width: 80,
        align: "left"
    }
    ];
    function createData(
    id,
    name,
    type,
    type2,
    ability,
    ability2,
    ha,
    hp,
    atk,
    def,
    spa,
    spd,
    spe
    ) {
    return {
        id,
        name,
        type,
        type2,
        ability,
        ability2,
        ha,
        hp,
        atk,
        def,
        spa,
        spd,
        spe
    };
    }
    const rows = [];
    
    props.pokemonToAdd.forEach((poke) => {
    rows.push(
        createData(
        poke.id,
        poke.name,
        poke.type[0],
        poke.type[1] != null ? poke.type[1] : " ",
        poke.ability[0],
        poke.ability[1] != null ? poke.ability[1] : "-",
        poke.hiddenability !== "NONE" ? poke.hiddenability : "-",
        poke.stats[0],
        poke.stats[1],
        poke.stats[2],
        poke.stats[3],
        poke.stats[4],
        poke.stats[5]
        )
    );
    });
    if (props.formsToAdd != null) {
        props.formsToAdd.forEach((form) => {
            rows.push(
            createData(
                form.id,
                form.name,
                form.type[0],
                form.type[1] != null ? form.type[1] : " ",
                form.ability[0],
                form.ability[1] != null ? form.ability[1] : "-",
                form.hiddenability !== "NONE" ? form.hiddenability : "-",
                form.stats[0],
                form.stats[1],
                form.stats[2],
                form.stats[3],
                form.stats[4],
                form.stats[5]
            )
            );
        });
    }
    return (
    <div style={{ height: props.height, width: "80%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={props.pageSize}
        rowsPerPageOptions={[props.rowsPerPage]}
      />
    </div>
  );
}
export default PokeTable;
