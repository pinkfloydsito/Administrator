import React, { useState, useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { Container, Row, Col } from 'reactstrap';
import DataTable from './datatable';
import ModalForm from './modal';

import {
  StoresAPI
} from '../../api/rest-api';

const StoreDashboard = (props) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await StoresAPI.get('localhost:3000/api/v1/stores/');

    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);


  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex(data => data.id === item.id);
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...items.slice(itemIndex + 1)
    ];
    setItems({ items: newArray });
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems({ items: updatedItems });
  };


  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ margin: '20px 0' }}>CRUD Stores</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
      </Row>
    </Container>
  );
};

StoreDashboard.propTypes = {
};

export default React.memo(StoreDashboard);
