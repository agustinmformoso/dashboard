import React from 'react'
import "./styles.css";
import Button from 'react-bootstrap/Button';

const ButtonComp = ({ description }) => {
    return (
        <Button variant="primary">{description}</Button>
    )
}

export default ButtonComp;