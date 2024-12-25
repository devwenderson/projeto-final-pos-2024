import { StrictMode } from 'react';
import * as ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';

// Pages
import Home from './pages/Home.jsx';
import ListUsers from './pages/users/ListUsers.jsx';
import ListTodos from './pages/todos/ListTodos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'usuarios/',
        element: <ListUsers />
      },
      {
        path: 'tarefas/',
        element: <ListTodos />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
