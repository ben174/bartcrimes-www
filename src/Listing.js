import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class Listing extends Component {
  constructor(){
	super();
	this.state = {
	  incidents: []
	};
  };

  componentDidMount() {
	const url = 'http://127.0.0.1:8000/api/v0/incidents/'
	fetch(url)
	  .then( (response) => {
		return response.json() })
	  .then( (json) => {
		this.setState({incidents: json.results});
	  });
  }

  render() {
	console.log(this.state.incidents)
    return (
      <div>
      <div> Listing </div>
	  <Card.Group>
      {this.state.incidents.map(incident => (
		<Card key={incident.id}>
		  <Card.Content>
			<Card.Header>{incident.title}</Card.Header>
			<Card.Meta>{incident.location}</Card.Meta>
			<Card.Description>{incident.body}</Card.Description>
		  </Card.Content>
		</Card>
      ))}
      </Card.Group>
      </div>
    )
  }
}


export default Listing
