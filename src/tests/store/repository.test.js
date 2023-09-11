import StateRepository from '../../store/persistence/repository'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn()
}
beforeAll(() => {
  Object.defineProperty(global, '_localStorage', {
    value: localStorageMock
  })
})

test('gets state', () => {
  localStorageMock.getItem = jest.fn(key =>
    key === 'STATE' ? '{"data":"content"}' : null
  )
  const state = StateRepository.getState()

  expect(state).toEqual({
    data: 'content'
  })
})

test('gets state when storage is empty', () => {
  const state = StateRepository.getState()

  expect(state).toBeNull()
})

test('sets state', () => {
  const state = { data: 'content' }

  localStorageMock.setItem = jest.fn()

  StateRepository.updateState(state)

  expect(localStorageMock.setItem).toBeCalledTimes(1)
  expect(localStorageMock.setItem).toBeCalledWith('STATE', '{"data":"content"}')
})
