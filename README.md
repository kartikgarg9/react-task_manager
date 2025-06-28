# Task Manager — React + Vite + Tailwind CSS

A simple and elegant task management app built with **React**, **Vite**, and **Tailwind CSS v4**.

This app lets you:
-  Add tasks with priority and description
-  Track progress with visual indicators
-  Filter tasks (All, Completed, Pending)
-  Clear all tasks in one click

---

##  Getting Started



### 1. Clone the repo

```bash
git clone <https://github.com/kartikgarg9/react-task_manager.git >
cd react-task-manager

2. Install dependencies
bash
npm install

3. Start the dev server
bash
npm run dev
The app will open at http://localhost:5173.

### Here's the Preview of Our Task Manager

![Homepage Screenshot](screenshots/Homepage.png) 

 Tailwind CSS (v4) Setup with Vite
We’re using Tailwind v4 with the official Vite plugin. Here's how it's set up:

1. Install Tailwind & Plugin
bash
npm install tailwindcss @tailwindcss/vite


2. Update vite.config.js
js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
})


3. Add Tailwind to your CSS
css
/* src/style.css */
@import "tailwindcss";
That’s it! You’re ready to use all Tailwind utility classes right in your components.

🧪 Unit Testing
We use Vitest and React Testing Library for testing React components.

Install test dependencies:
bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
Add test config in vite.config.js
js
test: {
  globals: true,
  environment: 'jsdom',
}
Example Test
js
import { render, screen } from '@testing-library/react'
import ProgressTracker from '../components/ProgressTracker'

test('displays progress correctly', () => {
  render(<ProgressTracker tasks={[{ completed: true }, { completed: false }]} />)
  expect(screen.getByText(/1 out of 2 tasks completed/i)).toBeInTheDocument()
})
Run tests

npx vitest
📁 Folder Structure
css
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── ProgressTracker.jsx
├── __tests__/
│   ├── TaskForm.test.jsx
│   ├── TaskList.test.jsx
│   └── ProgressTracker.test.jsx
├── App.jsx
├── main.jsx
├── style.css


Design
Built using Tailwind's utility-first classes

Responsive for mobile & desktop

Smooth transitions, hover effects, and color-coded priorities

License
Licensed under the MIT License.

Contributing
Contributions are welcome!
Feel free to fork this repo and submit a pull request. 💡

Made using React, Vite & Tailwind CSS v4
