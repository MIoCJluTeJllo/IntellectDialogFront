import { Button, styled } from '@mui/material'
import { parseDateString } from '../../utils/helpers/general'

function Table({ data = [], onGetId, onHandleDeleteId }) {
	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Имя</th>
					<th>Фамилия</th>
					<th>User Name</th>
					<th>График работы</th>
					<th>Телефон</th>
					<th>Компания</th>
					<th>Статус</th>
					<th> </th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.name}</td>
						<td>{item.lastName}</td>
						<td>{item.userName}</td>
						<td>{parseDateString(item.workSchedule)}</td>
						<td>{item.phoneNumber}</td>
						<td>{item.company}</td>
						<td>
							{item.status === true ? 'ACTIVED' : 'UNACTIVED'}
						</td>
						<td>
							<Button onClick={() => onGetId(item.id)}>
								edit
							</Button>
							<Button onClick={() => onHandleDeleteId(item.id)}>
								delete
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</StyledTable>
	)
}

export default Table

const StyledTable = styled('table')`
	background-color: #f7f8fa;
	border-collapse: collapse;
	width: 100%;
	font-style: normal;
	line-height: normal;

	th,
	td {
		text-align: left;
		@media (min-width: 800px) {
			border: 1px solid #c0c0c0;
		}
	}
	thead {
		height: 40px;
		tr {
			th {
				text-align: center;
			}
			display: none;
			@media (min-width: 800px) {
				display: table-row;
			}
		}
	}

	tr {
		display: flex;
		flex-direction: column;
		margin: 0 0 16px;
		border: 1px solid #c0c0c0;
		@media (min-width: 800px) {
			display: table-row;
			margin: 0;
		}
	}
	td {
		border-top: 1px solid #c0c0c0;
		padding: 44px 12px 16px;
		position: relative;
		@media (min-width: 800px) {
			padding: 12px;
			border-top: 0;
		}
	}
`
