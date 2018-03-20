import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class layout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center' }}>
          Pendidikan Teknik Informatika</Text>
      </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
      </View>
        <View style={styles.box3}>
          <Text style={styles.button}>1</Text>
          <Text style={styles.button}>2</Text>
          <Text style={styles.button}>3</Text>
          <Text style={styles.button}>4</Text>
      </View>
      <View style={styles.box4}>
        <Text style={styles.button}>5</Text>
        <Text style={styles.button}>6</Text>
        <Text style={styles.button}>7</Text>
        <Text style={styles.button}>8</Text>
      </View>
      <View style={styles.box1}>
        <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center' }}>
        #Pendidikan Teknik Informatika</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: '#FF7F50',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box5: {
    flex: 1,
    backgroundColor: '#00BFFF',
    margin: 10
  },
  text: {
    fontSize: 50
  }
});
