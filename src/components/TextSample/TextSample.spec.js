import { render, cleanup } from '@testing-library/vue'
import TextSample from './TextSample.vue'

const data = { name: 'Maria', age: '15' }

afterEach(cleanup)

describe('TextSample', () => {

  it('should render error text', () => {
    const { getByText } = render(TextSample)

    expect(getByText("Seu nome não foi encontrado!")).toBeInTheDocument
    expect(getByText("Sua idade não foi encontrada!")).toBeInTheDocument
  })

  it('should render text with name and age', () => {
    const { getByText } = render(TextSample, { props: { name: data.name, age: data.age } })

    expect(getByText("Seu nome é Maria")).toBeInTheDocument
    expect(getByText("Sua idade é 15")).toBeInTheDocument
  });
})