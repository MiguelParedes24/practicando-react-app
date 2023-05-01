import React,{ useState } from 'react';
import './App.css';

function App() {
  const list = ["Banana", "Apple", "Orange", "Mango","Watermelon"];
  const [filterList, setFilterList] = useState(list);

  const handleSearch =  (event)=>{
    if (event.target.value ==="") {
      setFilterList(list);
      return;
    }
      const filteredValues = list.filter(
        (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
      setFilterList(filteredValues);
    };

  return (
    <div className="App">
      <div>
        <p>Ejercicio 1: Busqueda de elementos en una lista</p> 
          <input name="query" type="text" onChange={handleSearch} placeholder='Search...'/>
      </div>
      <ul>
      {filterList && filterList.map((item,index) =>(
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
