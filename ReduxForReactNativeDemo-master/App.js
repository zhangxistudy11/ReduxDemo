/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './js/reducers'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './js/components/screens'
// https://juejin.im/post/5bac26ad6fb9a05d353c8040
const logger = createLogger();
//全局的根store
const store = createStore(
    rootReducer,
    //添加中间件
    applyMiddleware(thunk, logger)
);

registerScreens(store, Provider);

export default class App extends Component {

    constructor(props){
       super(props);
       this._startApp();
    }

    _startApp = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'ReduxForReactNativeDemo.HomeScreen',
                    icon: require('./res/img/ic_home.png'),
                    // selectedIcon: require('./img/checkmark.png'),
                    title: 'Home',
                    overrideBackPress: false,
                    navigatorStyle: {}
                },
                {
                    label: 'Posts',
                    screen: 'ReduxForReactNativeDemo.PostsScreen',
                    icon: require('./res/img/ic_news.png'),
                    // selectedIcon: require('./img/checkmark.png'),
                    title: 'Posts',
                    navigatorStyle: {}

                }
            ]
        });
    }

}
