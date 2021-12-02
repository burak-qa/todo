import React from 'react'
import Button from './Button'

function Form(props) {
  const {todo, onChange ,onClick,descriptionError, todoError} = props
	
	return (
		<div>
<form style={{margin:'15%'}}> 
  <div className="form-group">
    <label>Tasks</label>
    <input value={todo} name="tasks" type="text"  onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Tasks"/>
    <div  className="warning">{todoError}</div>
  </div>
  <div className="form-group">
    <label>Explanation</label>
    <input value={props.explanation}   name="explanation" type="text"   onChange={onChange} className="form-control" id="exampleInputPassword1" placeholder="Enter Explanation "/>
    <div  className="warning">{descriptionError}</div>
  
  </div>

  {}
  <Button  onClick={onClick} type={"submit"} className={"btn btn-primary"} buttonName={"Send "}/>
</form>


		</div>
	)
}
export default Form
