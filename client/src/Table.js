/*
Table.js
This module is used to render Policy Table.
*/

import React from 'react';
import DataTable from 'react-data-table-component';
import columns from './utils/columns';
import styled from 'styled-components';

    const customStyles = {
        headRow: {
            style: {
                border: 'none',
            },
        },
        headCells: {
            style: {
                color: '#202124',
                fontSize: '14px',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                borderRadius: '25px',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Policy Id/Customer Id"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton className="btn btn-dark" type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);

const PolicyTable = ({ data }) => {
    const [filterText, setFilterText] = React.useState('');
    
	const filteredItems = filterText.length > 0 ? data.filter(
		item => ((item.policy_id && item.policy_id === parseInt(filterText)) || (item.cust_id && item.cust_id === parseInt(filterText))),
	): data;

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText]);
    return (
        <DataTable
            columns={columns}
            data={filteredItems}
            keyField='policy_id'
            pagination
            highlightOnHover
		    pointerOnHover
            customStyles={customStyles}
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
        />
    );
};

export default PolicyTable;