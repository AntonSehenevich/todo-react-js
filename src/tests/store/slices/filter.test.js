import reducer, { setFilter } from '../../../store/slices/filter'

test('returns the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    current: 'ALL'
  })
})

test('"setFilter" action changes current filter', () => {
  const previousState = {
    current: 'ALL'
  }

  expect(reducer(previousState, setFilter('COMPLETED'))).toEqual({
    current: 'COMPLETED'
  })
})
