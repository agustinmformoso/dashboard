import React from 'react'
import "./styles.css";
import Table from 'react-bootstrap/Table';
import TableRow from '../../Components/TableRow';

const Grid = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In stock</th>
                    <th>Price history</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                
            </tbody>
        </Table>
    )
}

export default Grid;