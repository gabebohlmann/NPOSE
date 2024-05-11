import { WebView } from 'react-native-webview';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function webViewPlayer() {
  return (
    <SafeAreaView style={styles.container}>
      {
        Platform.OS !== 'web' ? (
          <WebView source={{ uri: 'https://vidream.netlify.app/' }} />
        ) : (
          <iframe src='https://vidream.netlify.app/' style={styles.frame} />
        )
      }
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frame: {
    width: '100%',
    height: '100%',
  }
});