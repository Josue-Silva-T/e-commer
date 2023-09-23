import React from 'react';
import { render } from '@testing-library/react';
import { CarritoCompras } from './CarritoCompras.component';



describe('CarritoCompras', () => {
  test("The 'CarritoCompras' is in the DOM", () => {
    render(<CarritoCompras/>);
  });
});
