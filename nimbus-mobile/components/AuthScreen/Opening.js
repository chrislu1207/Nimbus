import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../LoginContainers/CustomButton'
import metrics from '../../config'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class Opening extends Component {
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
  }

  render () {
    return (
      <View style={styles.container}>
        <View animation={'fadeInUp'} delay={600} duration={800}>
          <CustomButton
            text={'Sign In With Facebook'}
            onPress={this.props.signInWithFacebook}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
        <View animation={'fadeInUp'} delay={600} duration={800}>
          <CustomButton
            text={'Sign In'}
            onPress={this.props.onSignInPress}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
        <View style={styles.separatorContainer} animation={'zoomIn'} delay={1200} duration={800}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorOr}>{'or'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <View animation={'fadeInUp'} delay={1000} duration={800}>
          <CustomButton
            text={'Create Account'}
            onPress={this.props.onCreateAccountPress}
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Opening)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center'
  },
  createAccountButton: {
    backgroundColor: '#9B9FA4',
  },
  createAccountButtonText: {
    color: 'white',
    fontFamily: 'Avenir',
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#9B9FA4'
  },
  separatorOr: {
    color: '#9B9FA4',
    marginHorizontal: 8,
    fontFamily: 'Avenir',
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: '#0084ff'
  },
  signInButtonText: {
    color: 'white',
    fontFamily: 'Avenir',
  }
})