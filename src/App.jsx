import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./pages/theme";
import { Outlet } from "react-router-dom";
import Header_Top from "./components/header/Header_Top";
import Header_Mid from "./components/header/Header_Mid";
import "./index.css";
import Login from "./components/Login/Login";

import Register from "./components/register/Register";
// import Main  from "./components/main/Main";
import  CardProduct  from "./components/card/CardProduct";
const linksArray = ["Home", "Product", "cart", "Contact Us", "Service"];

function App() {
  const [theme, setTheme] = useMode();
  return (
    <ColorModeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header_Top />

          <Header_Mid links={linksArray} />

          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <CardProduct />
            </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
