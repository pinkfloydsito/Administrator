import React, { useState, useContext, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import {
  STORE, CATEGORY, PRODUCT
} from '../../utils/adminConstants';

const Tabs = (props) => {
  const {
    history
  } = props;

  const [activeTab, setActiveTab] = useState(STORE);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
    if (tab === STORE) history.push('/stores');
    else if (tab === CATEGORY) history.push('/categories');
    else if (tab === PRODUCT) history.push('/products');
  };

  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === STORE })}
          onClick={() => { toggle('1'); }}
        >
          Stores
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === CATEGORY })}
          onClick={() => { toggle(CATEGORY); }}
        >
          Categories
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === PRODUCT })}
          onClick={() => { toggle(PRODUCT); }}
        >
          Products
        </NavLink>
      </NavItem>
    </Nav>
  );
};

Tabs.propTypes = {
};

export default React.memo(withRouter(Tabs));
