import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskList from '../TaskList';

describe('TaskList Component', () => {
    const sampleTasks = [
        {
            text: 'Learn Testing',
            description: 'Vitest and React Testing Library',
            priority: 'High',
            completed: false,
            createdAt: new Date().toISOString()
        }
    ];

    it('renders task with text and description', () => {
        render(
            <TaskList
                tasks={sampleTasks}
                updateTask={vi.fn()}
                deleteTask={vi.fn()}
            />
        );

        expect(screen.getByText(/learn testing/i)).toBeInTheDocument();
        expect(screen.getByText(/vitest and react testing library/i)).toBeInTheDocument();
        expect(screen.getByText(/high priority/i)).toBeInTheDocument();
    });

    it('calls updateTask when Complete button is clicked', () => {
        const mockUpdate = vi.fn();

        render(
            <TaskList
                tasks={sampleTasks}
                updateTask={mockUpdate}
                deleteTask={vi.fn()}
            />
        );

        const completeButton = screen.getByRole('button', { name: /complete/i });
        fireEvent.click(completeButton);

        expect(mockUpdate).toHaveBeenCalled();
        expect(mockUpdate).toHaveBeenCalledWith(
            expect.objectContaining({ completed: true }),
            0
        );
    });

    it('calls deleteTask when Delete button is clicked', () => {
        const mockDelete = vi.fn();

        render(
            <TaskList
                tasks={sampleTasks}
                updateTask={vi.fn()}
                deleteTask={mockDelete}
            />
        );

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(deleteButton);

        expect(mockDelete).toHaveBeenCalledWith(0);
    });
});
