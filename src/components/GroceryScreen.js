import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';

import {Icon, Button, ThemeContext, FAB, Card} from 'react-native-elements';

import ListItem from './ListItem';
import AddItem from './AddItem';

const GroceryScreen = () => {
  const {theme} = useContext(ThemeContext);

  const [addVisible, setAddVisible] = useState(false);

  const toggleAddOverlay = () => {
    setAddVisible(!addVisible);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 10,
      right: 20,
    },
    button: {
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: theme.colors.secondary,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ListItem />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FAB
          buttonStyle={styles.button}
          icon={
            <Icon type="font-awesome" name="plus" size={30} color="white" />
          }
          onPress={toggleAddOverlay}
        />
      </View>

      <AddItem close={toggleAddOverlay} visible={addVisible} />
    </SafeAreaView>
  );
};

export default GroceryScreen;
