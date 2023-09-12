import { registerRootComponent } from 'expo';

import App from './App';

import {name as appName} from './app';


registerRootComponent(App, {initialProp: appName});
