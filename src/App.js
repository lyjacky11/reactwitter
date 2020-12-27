import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "./App.css";

/* Components */
import Navigation from "./components/Navigation";
import PostsFeed from "./components/PostsFeed";
import Sidebar from "./components/Sidebar";

function App () {
	return (
		<div className="app">
			<Router>
				<Navigation />
				<Switch>
					{/* Home */}
					<Route exact path="/home">
						<PostsFeed title="Home" />
					</Route>
					{/* Profile */}
					<Route exact path="/profile">
						<PostsFeed title="Profile" />
					</Route>
					{/* Messages */}
					<Route exact path="/messages">
						<PostsFeed title="Messages" />
					</Route>
					{/* Explore */}
					<Route exact path="/explore">
						<PostsFeed title="Explore" />
					</Route>
					{/* Notifications */}
					<Route exact path="/notifications">
						<PostsFeed title="Notifications" />
					</Route>
					{/* Settings */}
					<Route exact path="/settings">
						<PostsFeed title="Settings" />
					</Route>
					{/* Default */}
					<Route>
						<Redirect to="/home" />
					</Route>					
				</Switch>
				<Sidebar />
			</Router>			
		</div>
	);
}

export default App;
