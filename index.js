/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry , YellowBox } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';


YellowBox.ignoreWarnings(['Remote debugger is in a background']);

AppRegistry.registerComponent(appName, () => App);
