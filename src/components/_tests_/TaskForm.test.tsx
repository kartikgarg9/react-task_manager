import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskForm from '../TaskForm';

describe('TaskForm component', () => {
  it('calls addTask when form is submitted with a task', () => {
    const mockAddTask = vi.fn();

    render(
      <TaskForm
        addTask={mockAddTask}
        setFilter={() => { }}
        setSearchQuery={() => { }}
      />
    );

    // Fill the task input
    const input = screen.getByPlaceholderText(/enter your task/i);
    fireEvent.change(input, { target: { value: 'Write test case' } });


    const button = screen.getByRole('button', { name: /add/i });


    fireEvent.click(button);

    // Assertion
    expect(mockAddTask).toHaveBeenCalled();
    expect(mockAddTask).toHaveBeenCalledWith(
      expect.objectContaining({
        text: 'Write test case',
        description: '',
        priority: 'Medium',
        completed: false
      })
    );
  });
});
