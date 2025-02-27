/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

const React = require('react');
const {Alert, Image, StyleSheet, Text, View} = require('react-native');
const ScreenshotManager = require('../../../NativeModuleExample/NativeScreenshotManager');

class ScreenshotExample extends React.Component<{...}, $FlowFixMeState> {
  state = {
    uri: undefined,
  };

  render() {
    return (
      <View style={style.container}>
        <Text onPress={this.takeScreenshot} style={style.button}>
          Click to take a screenshot
        </Text>
        <Image style={style.image} source={{uri: this.state.uri}} />
      </View>
    );
  }

  // [macOS] alert needs two string arguments, passing an error results in crashing
  takeScreenshot = () => {
    if (ScreenshotManager !== undefined && ScreenshotManager !== null) {
      ScreenshotManager.takeScreenshot('window', {format: 'jpeg', quality: 0.8}) // See UIManager.js for options
        .then(uri => this.setState({uri}))
        .catch(error =>
          Alert.alert('ScreenshotManager.takeScreenshot', error.message),
        );
    } else {
      Alert.alert(
        'ScreenshotManager.takeScreenshot',
        'The turbo module is not installed.',
      );
    }
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
});

exports.title = 'Snapshot / Screenshot';
exports.category = 'Basic';
exports.description = 'API to capture images from the screen.';
exports.examples = [
  {
    title: 'Take screenshot',
    render(): React.Element<any> {
      return <ScreenshotExample />;
    },
  },
];
