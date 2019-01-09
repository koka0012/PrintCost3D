import React, { Component } from 'react';
import { AsyncStorage, AppState } from 'react-native';
import Routes from './src/config/routes';
import { Provider } from 'react-redux';

import store from './src/config/store';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/config/store/reducers';
import LoadingScreen from './src/scenes/loadingScreen';
import NavigationService from './src/config/routes/NavigationService';

import i18n from './src/config/locales';
import { withNamespaces } from 'react-i18next';


// ref={navigatorRef => {
//   NavigationService.setTopLevelNavigator(navigatorRef)
// }}

const WrappedStack = ({ t }) => <Routes screenProps={{ t }}

  ref={navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  }}
/>;
const ReloadAppOnLanguageChange = withNamespaces('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStoreLoading: false,
      store: store,
    }
  }

  componentWillMount() {
    //Connect Assync Storage in Redux
    var self = this;
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    this.setState({ isStoreLoading: true });
    AsyncStorage.getItem('completeStore').then((value) => {

      if (value && value.length) {
        let initialStore = JSON.parse(value)
        self.setState({ store: createStore(reducers, initialStore, applyMiddleware(ReduxThunk)) })
      } else {
        self.setState({ store: store })
      }
      self.setState({ isStoreLoading: false })
    }).catch((error) => {
      self.setState({ store: store });
      self.setState({ isStoreLoading: false });
    })
  }

  _handleAppStateChange() {

    let storingValue = JSON.stringify(this.state.store.getState());
    AsyncStorage.setItem('completeStore', storingValue);
  }



  render() {
    if (this.state.isStoreLoading) {
      return <LoadingScreen />
    }
    return (
      <Provider store={this.state.store}>
        <ReloadAppOnLanguageChange
        />
      </Provider>
    );
  }
}