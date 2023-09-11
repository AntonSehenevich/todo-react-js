import renderer from 'react-test-renderer'
import Filter from '../../../components/todos/filter'
import { ALL } from '../../../constants/todoFilters'

test('renders correctly', () => {
  const tree = renderer
    .create(<Filter filter={ALL} setFilter={jest.fn()} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
