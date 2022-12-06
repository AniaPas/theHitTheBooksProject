import React from "react";
// style
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

// router
import { Routes, Route } from "react-router-dom";

// components Nav
import { Home } from "./view/Home/Home";
import Add from "./view/Add/Add";
import { All } from "./view/All/All";
import { OneBook } from "./view/OneBook/OneBook";

// componenty składowe

import { Nav } from "./components/Nav/Nav";

// iterface
import { navElements, PathNav } from "./HelperInterface/Navigation";

// global Store

import { GlobalStore } from "./Store/GlobalStore";
const theme = createTheme({
  typography: {
    fontFamily: `"Space Mono", "monospace"`,
    fontSize: 14,

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: amber[900],
    },
  },
});

const App = () => {
  const navigation: navElements[] = [
    {
      path: PathNav.HOME,
      name: "Home",
    },
    {
      path: PathNav.ALL,
      name: "All .....",
    },
    {
      path: PathNav.ADD,
      name: "Add...",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStore>
        <div className='app'>
          <p>Tu mozna coś wrzucić </p>
          <Nav navElements={navigation}></Nav>space
          <Routes>
            <Route path='/all' element={<All />} />
            <Route path='/add' element={<Add />} />
            <Route path='/' element={<Home />} />
            <Route path='/:book/:id' element={<OneBook />} />
          </Routes>
        </div>
      </GlobalStore>
    </ThemeProvider>
  );
};

export default App;
