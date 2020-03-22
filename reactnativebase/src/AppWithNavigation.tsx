import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {initTranslationFramework} from './utils/InitTranslationFramework';
import {CustomView} from './components/CustomView';
import {CustomText} from './components/CustomText';
import {useTranslation} from 'react-i18next';

initTranslationFramework();

const styles = {};

function HomeScreen() {
  const {t} = useTranslation();

  return (
    <CustomView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomText>{t('test')}</CustomText>
    </CustomView>
  );
}

function SettingsScreen() {
  return (
    <CustomView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomText>Settings</CustomText>
    </CustomView>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
