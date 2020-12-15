import React from "react";
import "./App.css";
import { FaTwitter } from 'react-icons/fa';

/* Components */
import Navigation from "./components/Navigation";
import PostsFeed from "./components/PostsFeed";
import Sidebar from "./components/Sidebar";

function App () {
	return (
		<div className="app">
			<Navigation Icon={FaTwitter} title="Reactwitter" />
			<PostsFeed />
			<Sidebar title="Trending" />
		</div>
	);
}

export default App;
