import { FC, ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { render, RenderOptions } from '@testing-library/react';
import { testingQueryClient } from '../setupTests';

const AllTheProviders: FC = ({ children }) => (
  <QueryClientProvider client={testingQueryClient}>
    {children}
  </QueryClientProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
