import React from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    const message = 'Hello I am from Parent component'

    return (
        <div>    
             <ChildComponent message = {message}/>
        </div>
    )
}

export default ParentComponent