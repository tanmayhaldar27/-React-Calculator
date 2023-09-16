import userEvent from "@testing-library/user-event";
import React , {useState} from "react";
import ReactDOM  from "react-dom";
import { HiPlus, HiMinus, HiOutlineX, } from "react-icons/hi";
import { RxSlash } from "react-icons/rx";





function App() {
  let [input1 , setInput1] = useState("");
  let [input2 , setInput2] = useState("");
  let [result , setResult] = useState(null);
  // let [message , setMessage] = useState(null);
  let [error , setError] = useState(null);
  let [success , setSuccess] = useState(null);


  const handleInputChange = (e , inputNum)=>{
    if(inputNum === 1){
      setInput1(e.target.value);
    }
    else{
      setInput2(e.target.value);
    }
  };

  const operations = {
    plus : (num1, num2)=> num1 + num2,
    minus : (num1, num2)=> num1 - num2,
    multiply : (num1, num2)=> num1 * num2,
    divide : (num1, num2)=> num1 / num2,
  };

  const handleOperations = (operation)=>{
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    if(isNaN(num1)){
      setError("Error!")
      setSuccess(null);
      setResult("Num1 cannot be empty");
      return;
    }
    else if(isNaN(num2)){
      setError("Error!")
      setSuccess(null);
      setResult("Num2 cannot be empty")
    }
    else{
      const operationFunction  = operations[operation];
    if(operationFunction){
      const calculateResult = operationFunction(num1 , num2);
      setResult(`Result -: ${calculateResult}`);
      setSuccess("Success!")
      setError(null);
    }
    else{
      setResult("Invalid Result")
      setError("Error!")
    }
    }
    
  }

  
  return (
    <div className="App">
      <h3>React Calculator</h3>
      <div className="inputs">
      <input type="text" value={input1} placeholder="Num 1" onChange={(e)=>{handleInputChange(e,1)}} />
      <input type="text" value={input2} placeholder="Num 2" onChange={(e)=>{handleInputChange(e,2)}}/>
      </div>
      <div className="buttons">
        <button onClick={()=>handleOperations('plus')} type="button"> <HiPlus className="icons"/> </button>
        <button onClick={()=>handleOperations('minus')} type="button"> <HiMinus className="icons"/> </button>
        <button onClick={()=>handleOperations('multiply')} type="button"> <HiOutlineX className="icons"/> </button>
        <button onClick={()=>handleOperations('divide')} type="button"> <RxSlash className="icons"/> </button>
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      
      {result !== null && <p className="result">{result}</p>}
    </div>
  );
}

export default App;