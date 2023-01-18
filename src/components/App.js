import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [appClass, setAppClass] = useState(true)

  const handleClick = (e)=>{
    setAppClass(!appClass)
  }
 

  return (
    <div  className={appClass ? "App light":"App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {appClass ? 'Light Mode' : 'Dark Mode' }
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;