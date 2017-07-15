import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<section className="home-section">
						<Col xs={6} xsOffset={3} className="home-main-jumbotron">
							Row 1
						</Col>
					</section>
				</Row>
				<Row>
					<section className="home-section">
						<Col xs={6} xsOffset={3} className="home-main-jumbotron">
							Row 2
						</Col>
					</section>
				</Row>
			</Grid>
		);
	}
}

export default App;
