import React from 'react'
import "./styles.css";
import Form from 'react-bootstrap/Form'

const TableRow = ({ c }) => {
    return (
        <tr>
            <td className="text-center">{c.id}</td>
            <td>{c.name}</td>
            <td className="text-center">{c.price}</td>
            <td className="text-center">{c.stock}</td>
            <td>-</td>
            <td className="text-center"><Form.Check type="checkbox" checked={c.active} /></td>
        </tr>
    )
}

export default TableRow;