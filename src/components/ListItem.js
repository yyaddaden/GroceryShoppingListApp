import React, {useEffect} from 'react';
import {View} from 'react-native';

import Item from './Item';

import {connect} from 'react-redux';
import {getItems} from '../actions/ItemsAction';

const ListItem = props => {
  useEffect(() => {
    props.getItems();
  }, []);

  return (
    <View style={{paddingBottom: 80}}>
      {props.items.map(item => {
        return (
          <Item
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
          />
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {items: state.items};
};

const mapDispatchToProps = {
  getItems: getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
