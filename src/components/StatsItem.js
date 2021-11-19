import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Card, Badge} from 'react-native-elements';

const StatsItem = props => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    badge: {
      height: 30,
      width: 30,
      borderRadius: 7,
      backgroundColor: props.color,
    },
    textBadge: {
      fontWeight: 'bold',
      color: 'white',
    },
    viewTitle: {
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View>
          <Badge
            badgeStyle={styles.badge}
            value={<Text style={styles.textBadge}>{props.value}</Text>}
          />
        </View>
      </View>
    </Card>
  );
};

export default StatsItem;
