import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Top Left</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.text}>Bottom Left</Text>
        </View>
        <View style={styles.bottomRight}>
          <View style={styles.rightTop}>
            <Text style={styles.text}>Right Top</Text>
          </View>
          <View style={styles.rightBottom}>
            <Text style={styles.text}>Right Bottom</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: '#f4fe87',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'blue'
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'red'
  },
  bottomLeft:{
    flex: 1,
    backgroundColor:'#12fea7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomRight:{
    flex: 1,
    backgroundColor: 'green',
  },
  rightTop:{
    flex: 2,
    backgroundColor: '#b4f7a7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightBottom:{
    flex: 1,
    backgroundColor: '#6ba127',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
