# Dev Stack — Build Your Ideal Tech Stack

Dev Stack is an interactive web application designed for developers to explore, compare, and assemble their customized software technology stack.

---

## Technologies Used

- **React.js** (v18+)
- **TypeScript** / **JavaScript**
- **Tailwind CSS**
- **Vite**
- **React-Toastify**

---

## ✨ Key Features

1. **Interactive Stack Builder**: Browse technologies across multiple categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools) and seamlessly add them to your personalized stack sidebar.
2. **Duplicate Prevention & Real-time Alerts**: Built-in validation ensures the same technology cannot be added twice. Instant visual notifications are triggered via `react-toastify` for adding, duplicate warnings, and removing items.
3. **Responsive UI Layout**: Includes a sticky top navbar, dual-action hero section, multi-column dynamic technology grid, and a responsive sidebar that adapts across mobile, tablet, and desktop views.

---

##  React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like markup directly inside JavaScript code. It is used in React because it makes component rendering structures visually intuitive and easier to read and maintain.

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Read-only data passed down from a parent component to a child component. A child component cannot modify its props.
- **State:** Local data managed internally within a component that can change over time. When state updates, React automatically re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to declare and update local state variables. In this project, `useState` was used in `TechnologySection.tsx` to store the loaded technology list (`technologies`), track user-selected stack items (`selectedTechnologies`), and manage the `loading` state during data fetching.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects in React components. In this project, it was used to trigger an asynchronous `fetch('/Data.json')` request once when the component initially mounts on the screen to load technology data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React requires a unique `key` prop to identify each list item individually. This helps React’s Virtual DOM efficiently track additions, removals, and updates without re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering different UI elements based on specific conditions or state. 
*Example:* In `YourStack.tsx`, conditional rendering displays the empty stack text when `selectedTechnologies.length === 0`, and renders the list of selected cards when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down directly via **Props**.
- **Child to Parent:** The parent passes a callback function as a prop to the child. The child invokes this function with data as arguments to send information back to the parent (e.g., passing `handleAdd` to `TechnologyCard`).