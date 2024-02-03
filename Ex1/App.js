import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
      <View style={styles.center}>
        <Text style={styles.textCenter}>Center</Text>
      </View>
      </View>
      <View style={styles.containerBottom}>
      <View style={styles.bottom}>
          <Text style={styles.textBottom}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7feff',
    flex: 1,
  },
  containerTop: {
    flex: 1,
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerBottom: {
    flex: 1,
  },
  top: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'red'
  },
  
  textTop: {
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'left'
  },
  textBottom: {
    fontWeight: 'bold',
    color: 'white',
    textAlign:'right'
  },
  bottom: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#7ee6fd',
    borderRadius: 8
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: '#33ff60',
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
