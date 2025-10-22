import { useState, useEffect } from "react"
import "/workspaces/tutpic-todolist/src/styles/App.css"

const App = () => {

    const [list, setList] = useState(["Hacer la cama", "Lavarse las manos", "Comer", "Pasear al perro"])
    const [accion, setAccion] = useState("")
    const [vacio, setVacio] = useState("false")

    const accionHandler = (e) => {
        setAccion(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        añadir()
    }

    const borrar = (e) => {
        let pos = e.target.id
        let listaBorrar = list.toSpliced(pos, 1)
        setList(listaBorrar)
    }
    const añadir = () => {
        if (accion.length > 0) {
            setList([...list, accion])
            setAccion("")         
        }
    }
    useEffect(()=>{
        list.length == 0 ? setVacio(true): setVacio(false);
    },[list])

    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center flex-column " id="todo" >
                <h1 className="fs-1 fw-light">To do list</h1>
                <form onSubmit={submitHandler} >
                    <input type="text" value={accion} className="form-control fs-5 fw-light" placeholder="¿Que tareas hay que hacer?" onChange={accionHandler} />
                </form>
                <ul id="lista" className="d-flex justify-content-center p-0 border border-top-0 border-secondary flex-column fw-light fs-5">
                    {list.map((ele, indx) => {
                        return <li key={indx} className="d-flex justify-content-between p-1 border-top border-secondary align-items-center ele">{ele} <button id={indx} onClick={borrar} className="btn btn-secondary boton">X</button></li>
                    })}
                    {vacio && <li  className="d-flex justify-content-between  p-1 border-top border-secondary fs-5">No hay tareas, añada tareas</li> }
                    <li  className="d-flex justify-content-between my-1 p-1 border-top border-secondary fs-6 fw-lighter">Quedan {list.length} tareas</li>
                </ul>
            </div>
        </div>
    )
}

export default App