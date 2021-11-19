import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {ThemeContext} from 'react-native-elements';

import StatsItem from './StatsItem';

import {connect} from 'react-redux';

const StatsScreen = props => {
  const {theme} = useContext(ThemeContext);

  const statistics = [
    {title: 'Total', value: props.all, color: theme.colors.primary},
    {title: 'Achetés', value: props.done, color: theme.colors.success},
    {title: 'En attente', value: props.pending, color: theme.colors.warning},
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {statistics.map((elt, idx) => {
        return (
          <StatsItem
            key={idx}
            title={elt.title}
            value={elt.value}
            color={elt.color}
          />
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    all: state.items.length,
    done: state.items.filter(item => item.status).length,
    pending: state.items.filter(item => !item.status).length,
  };
};

export default connect(mapStateToProps, null)(StatsScreen);
