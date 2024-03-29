import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register();

serviceWorkerRegistration.register({
	onUpdate : (registration) => {
		const waitingServiceWorker = registration.waiting;
		if (waitingServiceWorker) {
			waitingServiceWorker.addEventListener("statechange", (event) => {
				if (event.target.state === "activated") {
					alert("New app version is available! Click OK to update now.");
					window.location.reload();
				}
			});
			waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
		}
	}
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
