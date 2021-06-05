import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const { Navigator, Screen } = createDrawerNavigator();

function Routes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Minha Cidade',
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: 'Procurar',
        }}
      />
    </Navigator>
  );
}

export default Routes;