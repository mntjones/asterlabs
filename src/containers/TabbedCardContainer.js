
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabbedCardContainer.css'

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
            <Tab>What?</Tab>
            <Tab>Why?</Tab>
          </TabList>
          <TabPanel>A 529 is a...</TabPanel>
          <TabPanel>A 529 is a tax advantaged...</TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabbedCardContainer;