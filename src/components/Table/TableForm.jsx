import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material'
import React from 'react'
import DatePicker from 'react-datepicker'
import { sampleOptions } from './sampleData'

const TableForm = ({
  formState,
  isDisabled,
  handleSubmit,
  setFormState,
  handleAutocompleteChange
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}
    >
      <TextField
        label='Name'
        variant='outlined'
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        disabled={isDisabled}
      />
      <TextField
        label='Phone Number'
        variant='outlined'
        value={formState.phoneNumber}
        onChange={(e) =>
          setFormState({ ...formState, phoneNumber: e.target.value })
        }
        disabled={isDisabled}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.status}
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.checked })
            }
          />
        }
        label='Status'
        disabled={isDisabled}
      />
      <DatePicker
        selected={formState.date}
        onChange={(date) => setFormState({ ...formState, date })}
        customInput={<TextField label='Date' />}
        disabled={isDisabled}
      />
      <Autocomplete
        options={sampleOptions}
        getOptionLabel={(option) => option.name}
        onChange={handleAutocompleteChange}
        renderInput={(params) => <TextField {...params} label='Autocomplete' />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
      <Button type='submit' variant='contained' color='primary'>
        {formState.id ? 'Update' : 'Add'} Entry
      </Button>
    </form>
  )
}

export default TableForm
