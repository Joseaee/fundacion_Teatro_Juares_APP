import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {
  
  return (
    <SafeAreaProvider>  
        <StatusBar backgroundColor="#000"/>
        <Routes/>
    </SafeAreaProvider>
  );
}