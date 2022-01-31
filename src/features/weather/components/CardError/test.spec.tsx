import { render, screen, waitFor } from '@testing-library/react';
import CardError from '.';

describe('<CardError />', () => {
  it('should be able to render the component', () => {
    render(<CardError onClick={jest.fn} />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Try Again/i })
    ).toBeInTheDocument();
  });

  it('should be able to click in button and call a function', async () => {
    const mockFn = jest.fn();
    render(<CardError onClick={mockFn} />);

    const button = screen.getByRole('button', { name: /Try Again/i });
    button.click();

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
