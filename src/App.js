import React, {useState} from 'react'
import {nanoid} from "nanoid";

import Products from "./components/products";
import Inputs from "./components/inputs";
import Button from "./components/button";

const initProds = [
    {id: id(), name: 'prod1', catg: 'catg1', cost: 100},
    {id: id(), name: 'prod2', catg: 'catg2', cost: 200},
    {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];

function id() {
    return nanoid();
}

function getInitObj(){
    return  {
        id: id(),
        name: '',
        catg: '',
        cost: ''
    }
}


function App() {
    const [prods, setProds] = useState(initProds);
    const [obj, setObj] = useState(getInitObj());
    const [edit, setEdit] = useState(null);


    function ondeleteItem(id) {
        setProds(prods.filter(prod => prod.id !== id))
    }

    function getValue(prop) {
        if(edit){
            return prods.reduce((res, prod) =>
                prod.id === edit ? prod[prop]: res,'')
        }else {
            return obj[prop]
        }
    }


    function changeItem(prop, e) {
        if(edit){
            setProds(prods.map(prod => prod.id === edit ? {...prod, [prop]: e.target.value} : prod))
        }else {
            setObj({...obj, [prop]: e.target.value});
        }
    }


    function saveItem() {
        if(edit){
            setEdit(null)
        }else {
            setProds([...prods, obj])
            setObj(getInitObj())
        }
    }

    function changeSetEdit(id) {
        setEdit(id)
    }


    return <div className="container mt-5">
        <h2>CRUD on react hooks</h2>
        <Products
            prods={prods}
            onDeleteItem={ondeleteItem}
            changeSetEdit={changeSetEdit}
            saveItem={saveItem}
        />
        <Inputs
            getValue={getValue}
            changeItem={changeItem}
        />
        <Button
            type="Save"
            typeFunc={saveItem}
        />

    </div>
}

export default App;