import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import { useSelector } from 'react-redux';
const BasicTable = () => {
	const { users } = useSelector((state) => state.userInfo);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => users, [users]);
	const tableInstance = useTable({
		columns,
		data,
	});

	console.log('Redux tool kit store data', users);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;
	return (
		<table {...getTableProps()} className='table table-bordered'>
			<thead className='table-success'>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default BasicTable;
