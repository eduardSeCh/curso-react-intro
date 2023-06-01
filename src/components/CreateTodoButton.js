import '../assets/css/CreateTodoButton.css'
export function CreateTodoButton() {
  return (
    <button className="createTodoButton" onClick={(event) => {
      console.log(event.target)  
    }}>
      +
    </button>
  )
}
