import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { UsbSerial } from 'react-native-usbserial';


const usbs = new UsbSerial();

async function getDevicesAsync() {

    try {
        const deviceList = await usbs.getDeviceListAsync();
        // const firstDevice = deviceList[0];
        
        // console.log(firstDevice);

        if (deviceList) {
            let devices = []
            for(var dev in deviceList) {
              const dev = usbs.openDeviceAsync(firstDevice);
              devices.push(dev)
            }
          await devices;
            // const usbSerialDevice = await usbs.openDeviceAsync(firstDevice);
            
            console.log(devices);
        }
    } catch (err) {
        console.warn(err);
    }
}



class Menu extends React.Component {
  turnOnHeadLights = () => {
    const device = getDevicesAsync();
    console.warn(JSON.stringify(device))
  }

  turnOffHeadLights = () => {
    console.warn('turning off the headlights')
  }

  render() {
    return (
      <View style={styles.menu}>
        <Text style={styles.menuHeader}>Choose an action</Text>

        <Button title="Turn on the headlights" onPress={this.turnOnHeadLights} />
        <Button title="Turn off the headlights" onPress={this.turnOffHeadLights}></Button>
      </View>
    );
  }
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          I o 190E
          <Image style={styles.carImage} source={require('./car.png')}/>
        </Text>
        <Menu />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    fontSize: 20

  },
  carImage: {
    width: 100,
    height: 100,
  },
  menu: {
    padding: 20
  },
  menuHeader: {
    fontSize: 20
  }
});
