import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rows: []
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addRow: (state, action) => {
      state.rows.push(action.payload)
    },
    deleteRow: (state, action) => {
      state.rows = state.rows.filter((row) => row.id !== action.payload)
    },
    updateRow: (state, action) => {
      const index = state.rows.findIndex((row) => row.id === action.payload.id)
      if (index !== -1) {
        state.rows[index] = action.payload
      }
    }
  }
})

export const { addRow, deleteRow, updateRow } = tableSlice.actions
export default tableSlice.reducer
