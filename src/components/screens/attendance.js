import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker,Circle} from 'react-native-maps';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button22}>
        <AntDesign name="left" size={14} color="black" />
        <Text style={styles.headertitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const Attendance = ({navigation}) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
  const formattedTime = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const [locationUser, setLocationUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const haversineDistance = (point1, point2) => {
    return getDistance(
      { latitude: point1.latitude, longitude: point1.longitude },
      { latitude: point2.latitude, longitude: point2.longitude }
    );
  };
  const locationShop = { latitude: 8.5005484, longitude: 76.9486636}; // Replace with your actual shop coordinates

  const checkin = () => {
    if (!locationUser) {
      console.log("Location not available yet.");
      console.log(locationUser)
      return;
    }
    const distance = haversineDistance(
      {
        latitude: locationUser.coords.latitude,
        longitude: locationUser.coords.longitude
      },
      locationShop
    );
    console.log("Distance:", distance);
    if (distance <= shoprange) {
      Alert.alert('Check-in successful!', 'Your attendance has been noted.');
      console.log('Checked In!');
    } else {
      Alert.alert('Check-in failed', 'You are too far from the shop to check in.');
      console.log("Locations are more than 100 meters apart.");
      console.log(locationUser);
    }
  };
  const shoprange = 25;
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocationUser(location);
    })();
  }, []);
  const goToShop = () => {
    if (locationUser && locationUser.coords) {
      mapRef.current.animateToRegion({
        latitude: locationShop.latitude,
        longitude: locationShop.longitude,
        latitudeDelta: 0.001000,
        longitudeDelta:0.001000,
      });
    }
  };
  const goToUser = () => {
    if (locationUser && locationUser.coords) {
      mapRef.current.animateToRegion({
        latitude: locationUser.coords.latitude,
        longitude: locationUser.coords.longitude,
        latitudeDelta: 0.001000,
        longitudeDelta:0.001000,
      });
    }
  };
  const mapRef = React.createRef();
  return (
    <View style={styles.container}>
      <CustomButton title="Mark Attendance" 
      onPress={() => navigation.goBack()}
       />
      <View style={styles.containermain}>
        <Text style={styles.greetingText}>Hai User</Text>
        <Text style={styles.liveDate}>{formattedDate}</Text>
        <Text style={styles.liveTime}>{formattedTime}</Text>
      </View>
      <View style={styles.checkin}>
        <TouchableOpacity style={styles.checkInButton} onPress={checkin}>
          <Text style={styles.checkInButtonText}>CHECK IN</Text>
        </TouchableOpacity>
        
      
      </View><View style={styles.simpletextview}>
      <Text style={styles.simpletext}>You should be inside your shop to mark your{'\n'}attendance</Text></View>
      <View style={{ flex: 1 }}>
        <MapView
         ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude:8.5039,
            longitude:76.9511,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
           {locationUser && locationUser.coords && (
      <>
        {/* User's location marker */}
        <Marker
          coordinate={{
            latitude: locationUser.coords.latitude,
            longitude: locationUser.coords.longitude,
          }}
          title="Your Location"
          pinColor="blue" // Optional: Customize the color
        />
        {/* Shop location marker */}
        <Marker
          coordinate={locationShop}
          title="Shop Location"
          pinColor="red" // Optional: Customize the color
        />
         <Circle
              center={locationShop}
              radius={shoprange}
              fillColor="lightblue" // Adjust the color and opacity as needed
            />
      </>
    )}
  </MapView>
  <TouchableOpacity style={styles.optionButton}onPress={goToShop}>
          <Text style={styles.optionButtonText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtonyou}onPress={goToUser}>
          <Text style={styles.optionButtonText}>You</Text>
        </TouchableOpacity>
</View>
    </View>
  );
};
export default Attendance;

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:"#fff"
  },
  greetingText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:"bold"
  },
  liveDate: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 10,
  },
  liveTime: {
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 20,
  },
  checkin:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  simpletextview: {
   marginLeft:15
  },
  simpletext: {
    fontSize: 16,
    color:"#66727A",
    fontFamily:'sans-serif-thin',
    fontWeight:"700"
  },
  button22: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffa600',
  },
  headertitle: {
    marginLeft: 34,
    fontSize: 15,
    color: 'white',
  },
  containermain: {
    alignItems: "center",
    marginTop: 80,
  },
  checkInButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  checkInButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffa600',
    borderRadius: 5,
    width: 300
  },
  optionButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#ffa600',
    padding: 10,
    borderRadius: 5,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
  },
  optionButtonyou: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#ffa600',
    padding: 10,
    borderRadius: 5,
  },
});
