import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { useState } from 'react'
import { v4 } from 'uuid';

const defaultTodo = [
  {text: 'prueba defaul 1', completed: false, id: v4()},
  {text: 'prueba defaul 2', completed: true, id: v4()},
  {text: 'prueba defaul 3', completed: false, id: v4()},
  {text: 'prueba defaul 4', completed: false, id: v4()},
]

function App() {
  const [todos, settodos] = useState(defaultTodo)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  console.log("buscar: "+ searchValue)

  return (
    <>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodo.map(todo => 
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}/>
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
