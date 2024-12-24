import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTweets = async () => {
      const url = `https://api.twitter.com/2/users/{F1}/tweets`;
      const bearerToken = 'YOUR_BEARER_TOKEN';

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        const data = await response.json();
        setTweets(data.data || []); // Assuming `data` contains the tweets array
      } catch (error) {
        console.error('Error fetching tweets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tweet}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tweet: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});

export default TwitterFeed;
