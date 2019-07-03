import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.vwMain}>
      <Text style={styles.sectionTitle}>Step One</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  vwMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
