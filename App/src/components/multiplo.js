import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";

function Comp (){
    return <Text style={estilo.fonte}>Componente inicial</Text>
}

function Comp2 (){
    return <Text style={estilo.fonte}>Componente 2</Text>
}

function Comp3 (){
    return <Text style={estilo.fonte}>Componente 3</Text>
}

export{Comp,Comp2,Comp3}