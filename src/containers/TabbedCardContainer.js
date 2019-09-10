
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { AriaManager, AriaTab, AriaPanel, AriaTabList} from 'react-aria';
import Measure from 'react-measure';
//import FluidContainer from 'react-fluid-container';

const fastSpring = { stiffness: 400, damping: 40 }

class TabbedCardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabs: [{
        id: 't1',
        title: <strong>What is a 529?</strong>,
        panel: <div><p>Bacon</p><p> tri-tip </p></div>
      }, {
        id: 't2',
        title: <strong>Why use a 529?</strong>,
        panel: <div><p>Now that we know</p><p>  also </p></div>
      }, {
        id: 't3',
        title: <strong>Concerns about a 529?</strong>,
        panel: <div><p>Zombie </p></div>
      }],

      activeId: 't1',
      height: 'auto'
    }
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(activeId) {
    this.setState({ activeId })
  }

  render() {
    const { tabs, activeId } = this.state
    const activeIndex = tabs.indexOf(tabs.filter(tab => tab.id === activeId)[0])
    
    return (
      <AriaManager
        type="tabs"
        activeTabId={activeId}
        onChange={this._handleChange}
      >
        <div className="tab-set">
          <Measure>
            { dimensions =>
              <Motion
                style={{ x: spring(dimensions.width/3 * activeIndex, fastSpring) }}
              >
              { value =>
                <AriaTabList className="tab-list">
                  { tabs.map(({ id, title }) =>
                    <AriaTab
                      key={id}
                      id={id}
                      isActive={id === activeId}
                    >
                      {(props, isActive) => (
                        <div {...props} className={`tab-list-item ${isActive ? 'is-active' : ''}`}>
                          {title}
                        </div>
                      )}
                    </AriaTab>
                  )}
                  <div
                    style={{
                      width: dimensions.width/3,
                      height: 2,
                      background: '#a5acb1',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      transform: `translate3d(${value.x}px, 0, 0)`
                    }}
                  />
                </AriaTabList>
              }
              </Motion>
            }
          </Measure>
          <div className="tab-panels">
            

                { tabs.map(({ id, panel }) =>
                  <AriaPanel
                    key={id}
                    isActive={id === activeId}
                    controlledBy={id}
                    className="tab-panel"
                  >
                    {panel}
                  </AriaPanel>
                )}
              
            
          </div>
        </div>
      </AriaManager>
    )
  }
}

export default TabbedCardContainer;