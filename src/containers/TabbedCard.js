import React, {Component} from 'react'

var cns = require("classnames");

class TabbedCard extends Component {

	constructor(props) {
		super(props);
		this.state {current_index: this.props.current_index || 0; }

	}

	render () {

		// active class when the TabbedCard index matches the tab index
		let tabs = _.map(this.props.children, function (child, index) {
      var className = cns({'active': self.state.current_index === index});

    this.handleClick = (index) => {
	    this.setState({
	      current_index: index
	    });
  	}

		return(
				<li onClick={self.handleClick}>
          <a className={className} href="#">{child.props.display}</a>
        </li>

		)
	}
}

export default TabbedCard;