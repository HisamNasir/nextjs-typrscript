import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import {persistor} from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
