import Exponent from 'exponent';
import React from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  withNavigation,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import LoginScreen from './screens/LoginScreen';
import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

import { connect } from 'react-redux';
import { ActionCreators } from './redux/actions/index.js';
import { bindActionCreators } from 'redux';

class AppContainer extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <App {...this.props} />
      </NavigationProvider>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

@withNavigation
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      userIsLoggedIn: true,
    };
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (!this.state.appIsReady) {
  //     return;
  //   }
  //   const rootNavigator = this.props.navigation.getNavigator('root');
  //   rootNavigator.replace('rootNavigation');
  // }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  // login() {
  //   this.setState({
  //     userIsLoggedIn: true,
  //   })
  // }

  // logout() {
  //   this.setState({
  //     userIsLoggedIn: false,
  //   })
  // }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});