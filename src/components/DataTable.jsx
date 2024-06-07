import styles from './dataTable.module.css';
import data from '../data/stackline_frontend_assessment_data_2021.json';
import React, { useState, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const salesData = data[0].sales;

export default function DataTable() {
    const columns = useMemo(() => [
        {
            Header: "WEEK ENDING",
            accessor: "weekEnding"
        },
        {
            Header: "RETAIL SALES",
            accessor: "retailSales",
            Cell: ({ value }) => `$${value.toLocaleString()}`
        },
        {
            Header: "WHOLESALE SALES",
            accessor: "wholesaleSales",
            Cell: ({ value }) => `$${value.toLocaleString()}`
        },
        {
            Header: "UNITS SOLD",
            accessor: "unitsSold"
        },
        {
            Header: "RETAILER MARGIN",
            accessor: "retailerMargin",
            Cell: ({ value }) => `$${value.toLocaleString()}`
        },
    ], []);

    const data = useMemo(() => salesData, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy);

    return (
        <div className={styles.container}>
            <table className={styles.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
