import { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./App.css";

/* Components */
import Navigation from "./components/Navigation";
import HeaderTop from "./components/HeaderTop";
import Login from "./components/Login";
import Register from "./components/Register";
import PostsFeed from "./components/PostsFeed";
import PostDetail from "./components/PostDetail";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Template from "./components/Template";

function App () {
	const [, dispatch] = useStateValue();
	
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// logged in
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			}
			// logged out
			else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{/* Left Sidebar */}
				<Navigation />
				<Switch>
					{/* Login */}
					<Route exact path="/login">
						<div className="postDetail">
							<HeaderTop title="Login" />
							<Login />
						</div>
					</Route>
					{/* Register */}
					<Route exact path="/register">
						<div className="postDetail">
							<HeaderTop title="Register" />
							<Register />
						</div>
					</Route>
					{/* Home */}
					<Route exact path="/home">
						<PostsFeed title="Home" />
					</Route>
					{/* Profile */}
					<Route exact path="/profile">
						<div className="postDetail">
							<HeaderTop title="Profile" />
							<Profile />
						</div>
					</Route>
					{/* Messages */}
					<Route exact path="/messages">
						<div className="postDetail">
							<HeaderTop title="Messages" />
							<Template />
						</div>
					</Route>
					{/* Explore */}
					<Route exact path="/explore">
						<div className="postDetail">
							<HeaderTop title="Explore" />
							<Template />
						</div>
					</Route>
					{/* Notifications */}
					<Route exact path="/notifications">
						<div className="postDetail">
							<HeaderTop title="Notifications" />
							<Template />
						</div>
					</Route>
					{/* Settings */}
					<Route exact path="/settings">
						<div className="postDetail">
							<HeaderTop title="Settings" />
							<Template />
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
