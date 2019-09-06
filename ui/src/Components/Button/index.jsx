import React from 'react'
import "./styles.css";
import Button from 'react-bootstrap/Button';

const ButtonComp = ({ description, variante }) => {
    return (
        <Button variant={variante}>{description}</Button>
    )
}

export default ButtonComp;