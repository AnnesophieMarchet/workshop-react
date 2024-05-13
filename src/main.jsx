import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import axios from "axios";
import { DarkModeProvider } from "./hooks/useDarkmode.jsx";

function fetchPokemon() {
  return axios
    .get("https://pokebuildapi.fr/api/v1/pokemon/limit/250")
    .then((response) => response.data);
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/about",
        element: <About />,
        id: "Pokecard",
        loader: () => fetchPokemon(),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
