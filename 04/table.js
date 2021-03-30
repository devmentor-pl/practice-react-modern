import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import PropTypes from 'prop-types'

const Table = props => {
    const { tableData } = props;

    const columns = [
        {
            Header: 'Wyraz',
            accessor: 'word', 
        },
        {
            Header: 'Czas',
            accessor: 'time',
        },
    ];

    return <ReactTable columns={columns} data={tableData} />;
};

Table.propTypes = {

    tableData: PropTypes.instanceOf(Array).isRequired

}

export default Table;
