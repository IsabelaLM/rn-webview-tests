import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9AD',
  },
  btn: {
    backgroundColor: '#39F',
    borderRadius: 5,
    padding: 20,
  },
  txt: {
    color: '#FFF',
  },
});

export default class App extends Component {
  componentDidMount() {
    console.log('component did mount...');
  }

  openLink = () => {
    console.log('open link...');
    Linking.openURL('https://appear.in/health.inn').catch(err =>
      console.error('An error occurred', err)
    );
  };

  render() {
    return (
      <>
        {/* <WebView
          source={{ url: 'https://appear.in/health.inn' }}
          style={{ marginTop: 50 }}
          useWebKit={true}
          userAgent={
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15'
          }
        /> */}
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={this.openLink}>
            <Text style={styles.txt}>oieeee</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
