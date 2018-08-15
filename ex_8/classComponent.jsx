import React, {Component} from 'react'

export default class ClassComponent extends Component {
	
	constructor(props) {
		super(props)
		this.state = { value: props.initialValue }
	}
	sun(delta) {
		this.setState({ value: this.state.value + delta })
	}

	render() {
		return (
			<div>
				<h1>{this.props.value}</h1>
				<h2>{this.state.value}</h2>
				<button onClick={() => this.sun(-1)}>Dec</button>
				<button onClick={() => this.sun(1)}>Inc</button>
			</div>
		)
	}
}