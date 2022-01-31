import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('should be render the component', () => {
    render(<Header />);

    expect(
      screen.getByRole('img', { name: /Logo com a descrição Weather now/i })
    ).toBeInTheDocument();
  });
});
