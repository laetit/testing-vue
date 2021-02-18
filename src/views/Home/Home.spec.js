import { render, cleanup, fireEvent, waitFor } from '@testing-library/vue'
import Home from './Home.vue'

afterEach(cleanup)

describe('HelloWorld', () => {
  it('should replace rendered component', async () => {
    const { getByText, getByRole } = render(Home)

    expect(getByText('Por que testar seus componentes?')).toBeInTheDocument
    const button = getByRole('button')

    fireEvent.click(button)

    await waitFor(() => {
      expect(getByText('Como devo pensar meus testes?')).toBeInTheDocument
    })
  })
})
