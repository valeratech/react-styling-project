import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`
    
      margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${props => (props.valid ? 'red' : 'black')};
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${props => (props.valid ? 'red' : '#ccc')};
      background: ${props => (props.valid ? 'red' : 'transparent')};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    //&.invalid input {
    //  border-color: red;
    //  background-color: red;
    //}
    //
    //&.invalid label {
    //  color: red;
    //}
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
      <FormControl valid={!isValid}>
        {/*Ex.1 Create a red WARNING conditional inline-style using isValid state */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
