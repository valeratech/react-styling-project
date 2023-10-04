import React from 'react';
// Ex.4 import styled from "styled-components";

// Ex. 5 Use correct syntax to import CSS Modules file
import styles from './Button.module.css';

// // Ex.2 Replace <Button> component with a styled-component
// const Button = styled.button`
//     // Ex. 4 Set the width for mobile-devices based on the media-query configured below
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//     // Create a Styled-Component media query to dynamically change based on the type of device
//     @media (min-width: 768px) {
//       width: auto;
//   }
//
//   &:focus {
//     outline: none;
//   }
//
//   &:hover,
//   &active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
      // Ex.5 Call the styles.button property from the import to create the styling
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
