import renderer from 'react-test-renderer'
import Footer from '../../../components/todos/footer'
import { ALL } from '../../../constants/todoFilters'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Footer
        filter={ALL}
        uncompletedCount={1}
        deleteCompletedTodos={jest.fn()}
        setFilter={jest.fn()}
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
