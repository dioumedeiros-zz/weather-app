import { render, screen } from '../../../../shared/tests';
import { City } from '../../types';
import { CardPresentation } from '.';

describe('<CardPresentation />', () => {
  it('should be able to render the component', () => {
    const cityMock: City = {
      name: 'Porto Alegre',
      country: 'BR',
      showDetail: false,
    };
    render(<CardPresentation city={cityMock} />);

    expect(
      screen.getByRole('heading', { name: /porto alegre, br/i })
    ).toBeInTheDocument();
  });
});
