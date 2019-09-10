import React, {Component} from 'react'

class TabContent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active_content: this.props.active_content || false
		}
	}

	render () {


		return(
			<div></div>

		)
	}
}

export default TabContent;