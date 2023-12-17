import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import RootLayout from "./components/RootLayout";
import ErrorComponent from "./components/ErrorComponent";
import BookLayout from "./components/BookLayout";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorComponent />,
            children: [
                { index: true, element: <BookList /> },
                {
                    path: 'books',
                    element: <BookLayout />,
                    children: [
                        {index: true, element: <BookList />},
                        { path: ':id', element: <BookDetails /> },
                    ]
                },
            ]
        },
    ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
