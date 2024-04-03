// usestate just like a function  i am calling in the component, this usestate is returing  an array  & we destructuring this array, in this array one element is  state variable and another is setter functon// using setState we can update the  state

import {useState} from "react"
function State(){

    let[state , setState] = useState("State concept")
    let[counter , setCounter] = useState(0)

    function updateData(){
        setState("Hello i am react")
        setCounter(counter+1)
    }

return(

    <div style={{textAlign:"center"}}>

<h2> {state}----{counter}</h2>
  <button onClick={updateData}>Change the data</button>

    </div>
)

}
export default State;