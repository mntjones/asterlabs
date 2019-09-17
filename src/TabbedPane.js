
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style/TabbedPane.css'

class TabbedCardContainer extends Component {

  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }

  render() {
    return (
      <div>
        <Tabs selectedIndex={this.state.tabIndex} 
        onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab>What is a 529 Plan?</Tab>
            <Tab>Why would I want to use a 529?</Tab>
            <Tab>Potential Concerns?</Tab>
          </TabList>
          <TabPanel>
            <p>A 529 is a tax-advantaged investment 
            vehicle in the US designed for encouraging saving for 
            the future higher education expenses of a designated 
            beneficiary.</p>

            <p>You can use a 529 to pay for K-12 public, private and 
            religios school tuition, post-secondary education costs, such as
            tuition, fees, books, supplies & equipment, room and board.*</p>
          </TabPanel>
          <TabPanel>
            <p>With the Economic Growth & Tax Relief Reconciliation
            Act of 2001, qualified distributions from 529 plans are exempt 
            from federal income tax.</p>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>If the money is not spent on education, expenses are subject to income tax, 
              plus a 10% penalty.</li>
              <li>Paying qualified expenses directly from a 529 may reduce a student's 
              eligibility for need based financial aid.</li>
              <li>Paying qualified expenses from a 529 may reduce eligibility for the 
              American Opportunities Tax Credit, due to IRS coordination restrictions.</li>
            </ul>
            *
          </TabPanel>
        </Tabs>
        <div><p> * check your individual state rules for what a 529 can cover, as it varies.</p></div>
      </div>
    );
  }
}

export default TabbedCardContainer;