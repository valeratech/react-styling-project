import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// Ex.2 Replace <Div> component that references a 'form-control' class with a styled-component
const FormControl = styled.div`
    
      margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      //Ex.3 Reference the prop from the <FormControl> using an arrow function to show the validation styling
      color: ${props => props.invalid ? 'red' : 'black'};
    }

    & input {
      display: block;
      width: 100%;
      //Ex.3 Reference the prop from the <FormControl> using an arrow function to show the validation styling 
      border: 1px solid ${props => props.invalid ? 'red' : 'black'};
      background-color: ${props => props.invalid ? 'pink' : 'transparent'};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  `;

const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState('');
  // Ex.1 Create state (boolean) to track if form is valid
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    // Ex.1 Reset red WARNING conditional inline-style and isValid state when user begins typing
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // Ex.1 Add input validation to the Course Goal Input Form if no input is present when trying to submit
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*Ex.2 Create a prop for FormControl  referenced in the styled-component block at the top of the module */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
