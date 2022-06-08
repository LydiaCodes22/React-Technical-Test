import { render } from '@testing-library/react';
import Search from '../Components/Search';

describe('the search component', () => {
    it("renders correctly", () => {
        const { asFragment } = render(
          <Search />
        );
    
        expect(asFragment()).toMatchSnapshot();
      });
})