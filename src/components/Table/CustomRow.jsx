import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'

const CustomRow = ({ row, date, handleDelete, setFormState }) => {
  return (
    <TableRow key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.phoneNumber}</TableCell>
      <TableCell>{row.status ? 'Active' : 'Inactive'}</TableCell>
      <TableCell>{date.toLocaleDateString()}</TableCell>
      <TableCell>
        <Button onClick={() => handleDelete(row.id)} color='secondary'>
          Delete
        </Button>
        <Button
          onClick={() => setFormState({ ...row, date })}
          style={{ marginLeft: '10px' }}
        >
          Edit
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default CustomRow
