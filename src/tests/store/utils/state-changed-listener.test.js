/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit'
import setupWithStateChangedListener from '../../../store/utils/state-changed-listener'

test('handles state changed', () => {
  const handleStateChangedMock = jest.fn()
  const withListener = setupWithStateChangedListener(handleStateChangedMock)
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
    middleware: getDefaultMiddleware => withListener(getDefaultMiddleware)
  })

  store.dispatch(slice.actions.setValue(1))

  expect(handleStateChangedMock).toBeCalledTimes(1)
})
