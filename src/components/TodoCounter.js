import '../assets/css/TodoCounter.css'
export function TodoCounter({total, completed}) {
  return (
    <h1>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}
