import React from "react";
import "./App.css";

/* Components */
import Navigation from "./components/Navigation";
import PostsFeed from "./components/PostsFeed";
import Sidebar from "./components/Sidebar";

function App () {
	return (
		<div className="app">
			<Navigation />
			<PostsFeed />
			<Sidebar />
		</div>
	);
}

export default App;
