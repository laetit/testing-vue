import { render, cleanup } from "@testing-library/vue";
import SecondHome from "./SecondHome.vue";

afterEach(cleanup);

describe("SecondHome", () => {
  it("snapshot text second home component", () => {
    const container = render(SecondHome);

    expect(container.container).toMatchSnapshot();
  });
});
