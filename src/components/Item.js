import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Card, Button, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';

const Item = props => {
  const {theme} = useContext(ThemeContext);

  const [editVisible, setEditVisible] = useState(false);

  const toggleEditOverlay = () => {
    setEditVisible(!editVisible);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    buttonCheck: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.success,
    },
    iconCheck: {
      name: 'check',
      type: 'font-awesome',
      color: 'white',
      size: 15,
    },
    buttonEdit: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.primary,
    },
    iconEdit: {
      name: 'pencil',
      type: 'font-awesome',
      color: 'white',
      size: 15,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      textDecorationLine: props.status ? 'line-through' : 'none',
    },
    viewButtonCheck: {
      flex: 0.15,
      alignItems: 'flex-start',
    },
    viewText: {
      flex: 0.65,
      justifyContent: 'center',
    },
    viewButtonEdit: {
      flex: 0.15,
      alignItems: 'flex-end',
    },
  });
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.viewButtonCheck}>
          <Button
            buttonStyle={styles.buttonCheck}
            icon={styles.iconCheck}
            onPress={() => {
              props.edit(props.id, props.title, !props.status);
            }}></Button>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <View style={styles.viewButtonEdit}>
          <Button
            buttonStyle={styles.buttonEdit}
            icon={styles.iconEdit}
            onPress={toggleEditOverlay}></Button>
        </View>
      </View>
      <EditItem
        close={toggleEditOverlay}
        visible={editVisible}
        title={props.title}
        id={props.id}
        status={props.status}
      />
    </Card>
  );
};

const mapDispatchToProps = {
  edit: editItem,
};

export default connect(null, mapDispatchToProps)(Item);
