import React from 'react';
import Button from "../button";



function Products({prods, onDeleteItem, changeSetEdit}) {

    const result = prods.map(prod => {
        return <tr key={prod.id}>
            <td>{ prod.name }</td>
            <td>{ prod.catg }</td>
            <td>{ prod.cost }</td>
            <td><Button
                type=<i className="fa fa-trash-o" aria-hidden="true"/>
                typeFunc={() => onDeleteItem(prod.id)}
                /></td>
            <td><Button
                type=<i className="fa fa-pencil-square-o" aria-hidden="true"/>
                typeFunc={() => changeSetEdit(prod.id)}
            /></td>
        </tr>
    })

    return <div>
        <table className="table">
            <thead className="bg-info">
            <tr>
                <th>Name</th>
                <th>Catg</th>
                <th>Cost</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>

    </div>
}


export  default Products;