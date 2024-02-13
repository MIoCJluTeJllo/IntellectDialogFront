import { configureStore, createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('formData');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('formData', serializedState);
  } catch (error) {
    console.log('Error saving state to localStorage:', error);
  }
};

const initialState = loadFromLocalStorage() || {
  data: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
      saveToLocalStorage(state);
    },
    removeData(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload);
      saveToLocalStorage(state);
    },
    updateData(state, action) {
      const { id, newData } = action.payload;
      const index = state.data.findIndex(item => item.id === id);
      if (index !== -1) {
        state.data[index] = newData;
        saveToLocalStorage(state);
      }
    },
  },
});

export const { addData, removeData, updateData } = formSlice.actions;

export default configureStore({
  reducer: formSlice.reducer,
});
