import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRow, deleteRow, updateRow } from '../../store/tableSlice'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container
} from '@mui/material'
import 'react-datepicker/dist/react-datepicker.css'
import { initialFormState } from './sampleData'
import TableForm from './TableForm'
import CustomRow from './CustomRow'

function TableComponent() {
  const [formState, setFormState] = useState(initialFormState)
  const [isDisabled, setIsDisabled] = useState(false)
  const dispatch = useDispatch()
  const tableData = useSelector((state) => state.table.rows)

  const handleAdd = useCallback(() => {
    dispatch(addRow({ ...formState, id: Date.now() }))
    setFormState(initialFormState)
    setIsDisabled(false)
  }, [dispatch, formState])

  const handleDelete = useCallback(
    (id) => {
      if (window.confirm('Are you sure you want to delete this entry?')) {
        dispatch(deleteRow(id))
      }
    },
    [dispatch]
  )

  const handleUpdate = useCallback(() => {
    dispatch(updateRow(formState))
    setFormState(initialFormState)
    setIsDisabled(false)
  }, [dispatch, formState])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      formState.id ? handleUpdate() : handleAdd()
    },
    [formState, handleAdd, handleUpdate]
  )

  const handleAutocompleteChange = useCallback(
    (event, newValue) => {
      setIsDisabled(!!newValue)
      if (newValue) {
        setFormState({
          ...formState,
          name: newValue.name,
          phoneNumber: newValue.phoneNumber,
          status: newValue.status,
          date: newValue.date,
          autocomplete: newValue
        })
      } else {
        setFormState(initialFormState)
      }
    },
    [formState]
  )

  const formProps = {
    formState,
    isDisabled,
    handleSubmit,
    setFormState,
    handleAutocompleteChange
  }

  return (
    <Container>
      <div style={{ margin: '20px' }}>
        <TableForm {...formProps} />

        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => {
                const date = new Date(row.date)
                const customRowProps = { row, date, handleDelete, setFormState }
                return <CustomRow {...customRowProps} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  )
}

export default TableComponent
