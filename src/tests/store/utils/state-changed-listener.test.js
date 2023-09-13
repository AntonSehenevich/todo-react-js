/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit'
import setupWithStateChangedListener from '../../../store/utils/state-changed-listener'

test('handles state changed', () => {
  const handleStateChangedMock = jest.fn()
  const slice = createSlice({
    name: 'number',
    initialState: { current: 0 },
    reducers: {
      setValue: (state, action) => {
        state.current = action.payload
      }
    }
  })
  const store = configureStore({
    reducer: {
      numbers: slice.reducer
    },
    middleware: getDefaultMiddleware =>
      setupWithStateChangedListener(
        getDefaultMiddleware(),
        handleStateChangedMock
      )
  })

  store.dispatch(slice.actions.setValue(1))

  expect(handleStateChangedMock).toBeCalledTimes(1)
})
