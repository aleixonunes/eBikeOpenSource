import React from 'react';
import { View, Text, Image } from 'react-native';
import colors from '../res/colors.js'
import images from '../res/images.js'
import strings from '../res/strings.js'

class WelcomeScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image source={images.bike} />
        <Text style={styles.textStyles}>
          {strings.eBikeOpenSource}
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.teal300
  },
  textStyles: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 4,
    color: colors.teal50,
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default WelcomeScreen;
