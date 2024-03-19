import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button} from "react-bootstrap";
import {TableHead} from "../style/TableStyle";


const CustomTableComponent = (props) => {
    const dataList = props.data;
    if (dataList.length <= 0) {
        return (<div>wrong</div>);
    }

    console.log(dataList.length)


    const isAddToCartButtonShow= props.addToCart != null;




    const columns = props.columns;

    const headCells=columns.map(column=>{
        return(<td key={column.key}>{column.title}</td>)
    })
    const rowUI = dataList.map(obj => {
        return (
            <tr key={obj[columns[1].key]}>
                {columns.map(column => {
                    if(column.image===true){
                        return (<td key={column.key}><img width={column.width} src={obj[column.key]}/> </td>)

                    }
                    return (<td key={column.key}>{obj[column.key]}</td>)
                })}
                {(isAddToCartButtonShow)
                    &&
                    <td><input type={'button'} value={'Add to cart'} onClick={(e)=>props.addToCart(obj)}/></td>
                }
            </tr>
        );
    });

    return (

        <div >
            <table >
                <TableHead>
                <tr>
                    {headCells}
                </tr>
                </TableHead>
                <tbody>
                {rowUI}
                </tbody>
            </table>

        </div>
    )
    };
export default CustomTableComponent;