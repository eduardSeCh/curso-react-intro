import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { v4 } from 'uuid';

const defaultTodo = [
  {text: 'prueba defaul 1', completed: false, id: v4()},
  {text: 'prueba defaul 2', completed: true, id: v4()},
  {text: 'prueba defaul 3', completed: false, id: v4()},
  {text: 'prueba defaul 4', completed: false, id: v4()},
]

function App() {
  return (
    <>

      <TodoCounter 
        completed={
          defaultTodo.filter(todo => todo.completed === true).length
        } 
        total={defaultTodo.length}
      />
      <TodoSearch />

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
