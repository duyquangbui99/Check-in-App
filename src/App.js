import { useState } from 'react';
import './index.css';



export default function App() {
  const [newName, setNewItem] = useState("")
  const [listName, setlistName] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    if (newName) {
      setlistName([...listName, newName]); // add new name to the list array
      setNewItem(""); //clear the input field
    }
  }
  function handleDelete(index) {
    const updateName = listName.filter((_, i) => i !== index);
    console.log(index)
    setlistName(updateName)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className='form-row'>
          <label htmlFor='item'>Name</label>
          <input value={newName} onChange={e => setNewItem(e.target.value)} type="text" id='item' />
          <button className='btn'>Add</button>
        </div>
      </form>
      <h1 className='header'>List</h1>
      <ul className='list'>
        {listName.map((name, index) => (
          <li key={index}>
            <div>{name}</div>
            <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
