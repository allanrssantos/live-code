import React, { useState } from "react";
import Card from "../components";
import productList from '../data/productList.json'

export default function Principal(){
    const [data, setData] = useState(productList);
    return (
        <Card/>
    )
}