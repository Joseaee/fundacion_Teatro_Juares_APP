import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import {store} from './src/store'
import { Provider } from 'react-redux';
import './shim';

export default function App() {
  
  return (
    <Provider store={store}>
    <SafeAreaProvider>  
        <StatusBar backgroundColor="#000"/>
        <Routes/>
    </SafeAreaProvider>
    </Provider>
  );
}