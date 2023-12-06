import React from "react";

function alertMessage(label) {
    alert(`A label desse botão é ${label}`);
};
const Button = (props) => {
    return <button onClick={() => alertMessage(props.label)}>{props.label}</button>;
};

export default Button;