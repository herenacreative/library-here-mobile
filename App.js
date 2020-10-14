import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './src/routes/navigation.component';

import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from "redux-persist/integration/react";
const {store, persistor} = storage;

export default () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <AppNavigator />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  </>
);
