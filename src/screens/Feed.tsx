/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { WebView } from 'react-native-webview';

const Feed: React.FC = () => {
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
                <a 
                  class="twitter-timeline"
                  href="https://twitter.com/F1">
                  Tweets by F1
                </a>
                <script 
                  async 
                  src="https://platform.twitter.com/widgets.js" 
                  charset="utf-8">
                </script>
              </body>
            </html>
          `,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ flex: 1 }}
      />
  );
};


export default Feed;
