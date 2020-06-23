// Global
import React, { useState } from "react";
import "../components/App/app.css";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BtmLogo from "../assets/HYS-logo-lg.png";
import BarGraph from "../assets/stacked-bar.png";
// Local
import EmotionMap from "../utils/EmotionMap";
import ViewJournal from "../components/ViewJournal";
import ViewTime from "../components/ViewTime";
import ViewActivity from "../components/ViewActivity";

// Page Content
function Review({ entries }) {
	// type of view on page
	const [view, setView] = useState("time");

	// change view on button click
	const handleButtons = (event) => {
		setView(event.target.value);
	};

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div class="flexbox-container">
					<ButtonGroup>
						<Button variant="primary" size="lg" value="journal" onClick={handleButtons}>
							Journal
						</Button>
						<Button variant="outline-primary" size="lg" value="time" onClick={handleButtons}>
							Time
						</Button>
						<Button variant="primary" size="lg" value="activity" onClick={handleButtons}>
							Activity
						</Button>
					</ButtonGroup>
					<br />
				</div>
				<div class="container" id="componentDiv">
					{(() => {
						switch (view) {
							case "journal":
								return (
									<div>
										<ViewJournal entries={entries} />
									</div>
								);
							case "time":
								return (
									<div>
										<ViewTime entries={entries} />
									</div>
								);
							case "activity":
								return (
									<div>
										<ViewActivity entries={entries} />
									</div>
								);
							default:
								return <div>oops!</div>;
						}
					})()}
				</div>
			</div>
		</body>
	);
}

export default Review;
