
import '../assets/css/TodoSearch.css'
export function TodoSearch({searchValue, setSearchValue}) {  

  return (
    <input 
      className="TodoSearch" placeholder="Prueba de todo" 
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  )
}
