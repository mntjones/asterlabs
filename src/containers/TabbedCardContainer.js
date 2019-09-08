
import React, {Component} from 'react'
import TabContent from '../components/TabContent.js'
import TabbedCard from '../components/TabbedCard.js'
var cns = require("classnames");

class TabbedCardContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			current_index: this.props.current_index || 0
		}

	}

	render () {

		return(
			<TabbedCard>
        <TabContent display="What?">
          <div>
            <p>A 529 Plan is a tax-advantaged investment vehicle in the US designed 
              or encouraging saving for the future highter aducation expenses of a 
              designated benficiary. 
            </p>
            <p> You can use it for the costs of K-12 public, private and religious 
              school tuition. Also, for post-secondary school costs, such as tuition,
              books, supplies, equipment, room and board.
            </p>

            <p>Each state may have different rules for approved expenses, so please check local rules.</p>
          </div>
        </TabContent>

        <TabContent display="Why?">
          <div>With the Economic</div>
        </TabContent>

        <TabContent display="Concerns?">
          <div>Tab 3 Contents.</div>
        </TabContent>

        <TabContent display="Calculate">
          <div>Put in your initial investment and your monthly investment to see what your savings are in 5, 10, and 20 yrs.</div>
    
        </TabContent>
      </TabbedCard>
		)
	}
}
export default TabbedCardContainer;