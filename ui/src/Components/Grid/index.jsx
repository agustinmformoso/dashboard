import React from 'react'
import "./styles.css";
import Table from 'react-bootstrap/Table';
import TableRow from '../../Components/TableRow';
import data from '../../db/db.json';

const Grid = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className="text-muted">
                    <th className="text-center">ID</th>
                    <th>Name</th>
                    <th className="text-center">Price &uarr;</th>
                    <th className="text-center">In stock</th>
                    <th>Price history</th>
                    <th className="text-center">Active</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.clients.map((c) => (
                        <TableRow c={c} />
                    ))
                }           
            </tbody>
        </Table>
    )
}

export default Grid;