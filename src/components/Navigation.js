import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ToursScreen from '../screens/ToursScreen';
import MapScreen from '../screens/MapScreen';
import AccountScreen from '../screens/AccountScreen';

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  Tours: { screen: ToursScreen},
  Map: { screen: MapScreen},
  Account: { screen: AccountScreen },
});

export default Navigation;
