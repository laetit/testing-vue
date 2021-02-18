import { render, cleanup, fireEvent } from '@testing-library/vue'
import router from '../../router'
import Nav from './Nav.vue'

afterEach(cleanup)

describe('Nav', () => {
  it('should render route change', () => {
    const { getByText } = render(Nav, { router })

    expect(router.history.current.fullPath).toBe("/")

    fireEvent.click(getByText('Texto'))

    expect(router.history.current.fullPath).toBe("/text")

  })
})