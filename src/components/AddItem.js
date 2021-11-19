import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ThemeContext, Button, Input, Overlay} from 'react-native-elements';

import {connect} from 'react-redux';
import {addItem} from '../actions/ItemsAction';

const AddItem = props => {
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
          placeholder="Titre de l'article"
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={{fontSize: 24}}
          onChangeText={text => setTitle(text)}
        />
        <Button
          title="Ajouter"
          buttonStyle={{
            backgroundColor: theme.colors.primary,
          }}
          titleStyle={{fontSize: 20}}
          onPress={() => {
            if (title) {
              props.add(title);
              setTitle('');
              props.close();
            }
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
  add: addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);
