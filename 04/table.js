import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const Table = props => {
    const { tableData } = props;

    const columns = [
        {
            Header: 'Wyraz',
            accessor: 'word', // String-based value accessors!
        },
        {
            Header: 'Czas',
            accessor: 'time',
        },
    ];

    return <ReactTable columns={columns} data={tableData} />;
};

export default Table;
