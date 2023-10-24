import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./Components/Home";
import About from "./Components/About";
import Detial from "./Components/Detial";
import Images from "./Components/Images";
import Seasons from "./Components/Seasons";
import Footer from "./Components/Footer";

const theme = createTheme({
	typography: {
		fontFamily: ["Cinzel Decorative", "cursive"].join(","),
	},
});

function App() {
	return (
		<div className="main">
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/card/:id" element={<Detial />} />
						<Route path="/images" element={<Images />} />
						<Route path="/seasons" element={<Seasons />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
