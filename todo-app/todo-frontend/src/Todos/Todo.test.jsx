import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Todo from './Todo';

test('renders the todo item correctly', () => {
  const todo = { text: 'Write code', done: true };

  render(<Todo todo={todo} />);

  const checkbox = screen.getByRole('checkbox');
  const text = screen.getByText(/write code/i);

  expect(checkbox).toBeChecked();
  expect(text).toBeInTheDocument();
});
