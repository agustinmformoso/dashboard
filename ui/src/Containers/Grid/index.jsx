import React from 'react'
import "./styles.css";
import Table from 'react-bootstrap/Container';
import TableRow from '../../Components/TableRow';

const Grid = () => {
    return (
        <Table>
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
            </tbody>
        </Table>
    )
}

export default Grid;