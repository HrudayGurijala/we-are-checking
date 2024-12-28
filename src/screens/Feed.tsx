/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {WebView} from 'react-native-webview';
import LottieView from 'lottie-react-native';
import { View,StyleSheet } from 'react-native';


const Feed: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const load = async()=>{
    setTimeout(() => setLoading(false), 3000);
  };
  load();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <LottieView
          source={require('../assets/Animation - 1735015379125.json')}
          style={styles.loader}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <WebView
      source={{
        html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/F1?ref_src=twsrc%5Etfw">Tweets by F1</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </body>
              <style>
                body{
                background-color: #000000;
                  padding-bottom:65,
                }
              </style>
            </html>
          `,
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      style={{flex: 1}}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  loader: {
    width: '75%',
    height: '75%',
  },
});

export default Feed;
