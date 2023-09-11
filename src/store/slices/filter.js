/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ALL } from '../../constants/todoFilters'

const initialState = {
  current: ALL
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.current = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer
