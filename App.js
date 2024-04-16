import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import NativeStack from './navigations/NativeStack';
import { ContextProvider } from './context/ExpensesCTX';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ContextProvider>
        <NavigationContainer>
          <NativeStack />
        </NavigationContainer>
      </ContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

// ID render edilememe durumunu düzelt. Son eklenen datanın id'si render edilmediği için add expense ekranı geliyor edit değil.
