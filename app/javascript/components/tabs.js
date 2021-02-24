import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Reviews from './review';
import AddReview from './addReview';
import ScrollBar from 'react-scrollbars-custom';
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ color: "grey"}}
          >
            Reviews
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{ color: "grey"}}
          >
            Add Review
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
           <Link to="/">Back to Movies</Link>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <ScrollBar style={{ width: "100%", height: 382}}>
                <Reviews movie={props.movie} />
              </ScrollBar>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <AddReview movie={props.movie}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;
