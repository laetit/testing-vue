import { render, cleanup, fireEvent } from "@testing-library/vue";
import Form from "./Form.vue";

afterEach(cleanup);

const data = { name: 'Diego Costa', age: '34' }

describe("Form", () => {
  it("should text appear when typing", () => {
    const { getByPlaceholderText } = render(Form)
    const input = getByPlaceholderText('Nome')

    fireEvent.change(input, { target: { value: data.name } })
    expect(input.value).toBe(data.name)
  })
  it("should not render string and render number", () => {
    const { getByLabelText } = render(Form)
    const input = getByLabelText(/idade/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: data.name } })
    expect(input.value).not.toBe(data.name)

    fireEvent.change(input, { target: { value: data.age } })
    expect(input.value).toBe(data.age)
  })
  it("should render false radio buttons", () => {
    const { getAllByRole } = render(Form)
    const radios = getAllByRole(/radio/)

    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(false)

    fireEvent.click(radios[1])

    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(true)
  })
})
