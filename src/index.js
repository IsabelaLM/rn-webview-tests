import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { AgoraRtcEngine, AgoraRendererView } from 'react-native-agora';

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
  constructor(props) {
    super(props);

    // AgoraRtcEngine.createEngine('95b9bdb5c5af4f739851175683f54d24');
    // AgoraRtcEngine.enableVideo();
    // AgoraRtcEngine.enableAudio();

    // AgoraRtcEngine.setVideoProfileDetail(360, 640, 15, 300);
    // AgoraRtcEngine.setChannelProfile(
    //   AgoraRtcEngine.AgoraChannelProfileCommunication
    // );
  }

  componentDidMount() {
    console.log('component did mount...');
  }

  openLink = () => {
    console.log('open link...');
    Linking.openURL('facetime://fl.isabela@gmail.com').catch(err => {
      console.error('An error occurred', err);
      return null;
    });
    // Linking.openURL('https://appear.in/health.inn').catch(err =>
    //   console.error('An error occurred', err)
    // );
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
          {/* <AgoraRendererView
            ref={component => (this._localView = component)}
            style={{ width: 360, height: 240 }}
          />

          <AgoraRendererView
            ref={component => (this._remoteView = component)}
            style={{ width: 360, height: 240 }}
          /> */}
        </View>
      </>
    );
  }
}
