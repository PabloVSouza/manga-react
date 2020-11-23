import React from "react"
import "./App.scss"

import Routes from "./router"

function App() {
	return (
		<div className="app">
			<div className="wallpaper"></div>
			<div className="content">
				{/* <div id="loading" v-if="store.state.loading.active">
					<div
						id="loadingMessage"
						v-if="store.state.loading.message.length > 0"
					>
						<h1>{}</h1>
						<img src="@/assets/loading.gif" alt="loading" />
						<div id="progressBar">
							<p>{}%</p>
							<div id="progress" />
						</div>
					</div>
					<img
						v-else
						src="@/assets/loading.gif"
						alt="loading"
						id="loadingImage"
					/>
				</div> */}

				<Routes />
			</div>
		</div>
	)
}

export default App
