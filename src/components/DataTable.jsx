import styles from './dataTable.module.css'
import data from '../data/stackline_frontend_assessment_data_2021.json'
import * as React from "react"
import {useTable} from 'react-table'

const salesData = data[0].sales
// console.log(salesData)

export default function DataTable() {
    const data = React.useMemo(() => salesData, [])
    const columns = React.useMemo(() => [
        {
            Header: "WEEK ENDING",
            accessor: "weekEnding"
        },
        {
            Header: "RETAIL SALES",
            accessor: "retailSales"
        },
        {
            Header: "WHOLESALE SALES",
            accessor: "wholesaleSales"
        },
        {
            Header: "UNITS SOLD",
            accessor: "unitsSold"
        },
        {
            Header: "RETAILER MARGIN",
            accessor: "retailerMargin"
        },
    ], [])

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

    return(
        <div className={styles.container}>
            <table className={styles.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> 
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}