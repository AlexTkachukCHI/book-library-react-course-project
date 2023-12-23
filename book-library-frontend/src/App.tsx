import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import RootLayout from "./components/RootLayout";
import ErrorComponent from "./components/ErrorComponent";
import BookLayout from "./components/BookLayout";
import CreateBook from "./components/CreateBook";

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
                        { path: 'new', element: <CreateBook /> },
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
