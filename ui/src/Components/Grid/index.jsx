import React from 'react'
import "./styles.css";
import Table from 'react-bootstrap/Table';
import TableRow from '../../Components/TableRow';
import { GLOBAL } from '../../Config/global';

const Grid = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className="text-muted">
                    <th className="text-center">{GLOBAL.GRID.ID}</th>
                    <th>{GLOBAL.GRID.NAME}</th>
                    <th className="text-center">{GLOBAL.GRID.PRICE}</th>
                    <th className="text-center">{GLOBAL.GRID.STOCK}</th>
                    <th>{GLOBAL.GRID.PRICE_HISTORY}</th>
                    <th className="text-center">{GLOBAL.GRID.ACTIVE}</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    data.clients.map((clients) => (
                        <TableRow clients={clients} />
                    ))
                }            */}
            </tbody>
        </Table>
    )
}

export default Grid;