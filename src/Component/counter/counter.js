// <div> </div> this is jsx element, we have to write inline style  <div style={{textAlign:"center",marginTop:"400px"}}>,in style attribute  assign a object in {{in this css properties----textAlign:"center",marginTop:"400px" this is javascript code}} this object is wrap in other curly braces.first curly braces is syntax another is object.
//document is object and getelemebtbyid is function ,,Number is function,,,spanh2ref.innerText  is object.
import { useState } from "react";

function Counter(){

    let[state ,setState]   = useState(0);

var counterStyle = {
textAlign:"center",
margin:"100px auto",
boxShadow:"0 0 0 10px purple",
width:"300px",
padding:"70px 30px",
}



function incCount(){
    setState(state + 1);
    
}
return(
     <div style={counterStyle}>
        
        <h2>
            Count value is : {state}
        
            </h2>
        <button onClick={incCount}>Increase Count</button>&nbsp;&nbsp;
        
    </div>
)
}
export default Counter;