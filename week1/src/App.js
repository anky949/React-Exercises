import './App.css';
import {useState} from "react";


function App() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");
    const [item,setItem] = useState({itemName : null,price:null,itemDescription:null})
    const [items,setItems] = useState([]);




    const addNames = () => {
        setNames([...names, name]);
    }

    const setNewName = (event) => {
        setName(event.target.value);
    }



    const nameUI = names.map(name => <li>{name}</li>);



    const handleAddItem = (event)=>{
        setItems([...items,item]);
    }




    return (
        <div className="App">
            Hello World
            <div>
                <input type={"text"} onChange={setNewName}/>
                <input type={"button"} onClick={addNames} value={"add Name"}></input>
            </div>

            <div>
                {nameUI}
            </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            <div>Add Item</div>
            <label>Item Name</label> <input type={"text"} onChange={(event)=>setItem({...item,itemName:event.target.value})}/>
            <label>Item Price</label> <input type={"text"} onChange={(event)=>setItem({...item,price:event.target.value})} />
            <label>Item Description</label> <input type={"text"} onChange={(event)=>setItem({...item,itemDescription:event.target.value})} />
            <input type={"button"} value={"Add Item"} onClick={handleAddItem}/>
        </div>
    );


}


export default App;
