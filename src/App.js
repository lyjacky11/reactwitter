import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "./App.css";

/* Components */
import Navigation from "./components/Navigation";
import PostsFeed from "./components/PostsFeed";
import PostDetail from "./components/PostDetail";
import HeaderTop from "./components/HeaderTop";
import Sidebar from "./components/Sidebar";

function App () {
	return (
		<div className="app">
			<Router>
				{/* Left Sidebar */}
				<Navigation />
				<Switch>
					{/* Home */}
					<Route exact path="/home">
						<PostsFeed title="Home" />
					</Route>
					{/* Profile */}
					<Route exact path="/profile">
						<div className="postDetail">
							<HeaderTop title="Profile" />
						</div>
					</Route>
					{/* Messages */}
					<Route exact path="/messages">
						<div className="postDetail">
							<HeaderTop title="Messages" />
						</div>
					</Route>
					{/* Explore */}
					<Route exact path="/explore">
						<div className="postDetail">
							<HeaderTop title="Explore" />
						</div>
					</Route>
					{/* Notifications */}
					<Route exact path="/notifications">
						<div className="postDetail">
							<HeaderTop title="Notifications" />
						</div>
					</Route>
					{/* Settings */}
					<Route exact path="/settings">
						<div className="postDetail">
							<HeaderTop title="Settings" />
						</div>
					</Route>
					{/* Post */}
					<Route
						exact
						path="/post/:id"
						render={(props) => (
							<PostDetail key={props.match.params.id} postId={props.match.params.id} title="Post" />
						)}
					/>
					{/* Default */}
					<Route>
						<Redirect to="/home" />
					</Route>
				</Switch>
				{/* Right Sidebar */}
				<Sidebar />
			</Router>
		</div>
	);
}

export default App;
