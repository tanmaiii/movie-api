import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

export const Button = (props ) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
}

export const OutlineButton = (props) => {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
}

//kiem tra thuộc tính onclick có phải là function không
Button.propTypes = {
  onClick: PropTypes.func,
};

// import React from 'react';
// import PropTypes from 'prop-types';

// import './button.scss';

// const Button = props => {
//     return (
//         <button
//             className={`btn ${props.className}`}
//             onClick={props.onClick ? () => props.onClick() : null}
//         >
//             {props.children}
//         </button>
//     );
// }

// export const OutlineButton = props => {
//     return (
//         <Button
//             className={`btn-outline ${props.className}`}
//             onClick={props.onClick ? () => props.onClick() : null}
//         >
//             {props.children}
//         </Button>
//     );
// }

// Button.propTypes = {
//     onClick: PropTypes.func
// }

// export default Button;
