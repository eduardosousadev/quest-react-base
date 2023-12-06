import React from "react";

const P = ({text, color}) => {
    return <p style={{ color: color, textTransform: "uppercase"}}>{text}</p>;
};

export default P;