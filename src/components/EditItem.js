import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ThemeContext, Button, Input, Overlay} from 'react-native-elements';

import {connect} from 'react-redux';
import {removeItem, editItem} from '../actions/ItemsAction';

const EditItem = props => {
  const {theme} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
    },
  });

  const [title, setTitle] = useState('');

  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.close}
      fullScreen={true}>
      <View style={styles.container}>
        <Input
          placeholder={props.title}
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={{fontSize: 24}}
          onChangeText={text => setTitle(text)}
        />
        <Button
          title="Modifier"
          buttonStyle={{
            backgroundColor: theme.colors.primary,
          }}
          titleStyle={{fontSize: 20}}
          onPress={() => {
            if (title) {
              props.edit(props.id, title, props.status);
              setTitle('');
              props.close();
            }
          }}
        />
        <Text />
        <Button
          title="Supprimer"
          buttonStyle={{
            backgroundColor: theme.colors.error,
          }}
          titleStyle={{fontSize: 20}}
          onPress={() => {
            props.remove(props.id);
            props.close();
          }}
        />
        <Text />
        <Button
          title="Annuler"
          buttonStyle={{
            backgroundColor: theme.colors.grey3,
          }}
          titleStyle={{fontSize: 20}}
          onPress={props.close}
        />
      </View>
    </Overlay>
  );
};

const mapDispatchToProps = {
  remove: removeItem,
  edit: editItem,
};

export default connect(null, mapDispatchToProps)(EditItem);
