import { useState } from "react"

export const Button = (props) => {

const [array, setArray] = useState({
    array: {
        name: "mewto"
    }
})


function list() {
    addNewList(array)
}






    return (
        <button onClick={list} {...props}/>
    )
    
}