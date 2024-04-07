import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import NativeStack from './navigations/NativeStack';
import { ContextProvider } from './context/ExpensesCTX';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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



//TODOS
//ExpensesOutput componentlerini düzenle. RecentExpenses ve AllExpenses içinden data gönderiyorsun, flatlistler ve summary üzerinden bu datayı yazdır.
// stil düzenlemesi yap.
// Manage expenses oluştur.
// Manage expenses düzenlemelerini yap.
// HTTP services dosyasını oluştur.
// Firebase'e data gönder.
// ekrana fireBase'den gelen datayı yükle
// Update işlemini sağla.