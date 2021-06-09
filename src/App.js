import { useState } from 'react'
import classnames from 'classnames'

import './App.css'

import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Biskuit', count: 1},
    {title: 'Susu', count: 1},
    {title: 'Permen', count: 1}
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value) {
      alert('Anda belum mengisi input todo!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if(newTodos[index].count > 0) {
      // Selama jumlah count lebih dari 0
      // Maka count dikurangi 1
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // Jika jumlah count 0 lalu dikurangi 1
      // Maka hapus array value dengan index dari parameter fungsi handleSubstractionCount
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
          onChange={(e)=> {setValue(e.target.value)}}
          value={value}
          className="input" 
          type="text" 
          placeholder="List" />
          <button className="add-button" type="submit">add</button>
        </form>

        <div className="info">
          <div className="info-total">
            <p>{`Total List : ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p>{`Total Counts : ${getTotalCounts()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length == index + 1) && 'todo-divider'}`}>

                  {todo.title}

                  <div className="todo-icon-wrapper">

                  <div className="todo-count">{todo.count}</div>

                  <button onClick={() => handleSubstractionCount(index)} className="todo-action-button">
                    <img src={minusIcon} alt="minus-icon" />
                  </button>

                  <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
                    <img src={plusIcon} alt="plus-icon" />
                  </button>

                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="empty">
            Waduh, List kamu kosong nih!
          </div>
        )}
      </section>
    </>
  );
}

export default App;
