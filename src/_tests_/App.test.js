import { render } from '@testing-library/react';
import App from '../Components/App';

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});