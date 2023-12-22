import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';
import Details from './AddCustomersTabs/Details';
import OtherDetails from './AddCustomersTabs/OtherDetails';
import Address from './AddCustomersTabs/Address';
import ContactPerson from './AddCustomersTabs/ContactPerson';
import axios from 'axios';
import { baseUrl } from '../../api/const';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.button}>
      <View style={styles.button22}>
        <AntDesign name="left" size={14} color="black" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Tab = createMaterialTopTabNavigator();

const AddCustomer = ({ navigation }) => {
  const layout = useWindowDimensions();
  

  const handleSubmit = async () => {
    try {
      const postData = {
       
      
      };
      const response = await axios.post(`${baseUrl}/createCustomer`,postData);
      console.log('Response:', response.data);

      navigation.goBack(); // Example: navigate back after successful submission
    } catch (error) {
      console.error('Error:', error.message);
      // Handle errors appropriately (show an alert, log, etc.)
    }
  };
  const [formData, setFormData] = useState({
    customerType: '', // Unique field name
    customerName: '',
    emailAddress: '',
    salesPerson: '',
    collectionAgent: '',
    mop: '',
    mobileNumber: '',
    whatsappNumber: '',
    landlineNumber: '',
    fax: '',
    trn: '',
    customerBehaviour: '',
    isActive: false,
    customerAttitude: '',
    language: '',
    currency: '',
    isSupplier: false,
    address: '',
    country: '',
    state: '',
    area: '',
    poBox: '',
  });
  const [contactPersonFormdata, setContactPersonFormdata] = useState([]);

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <CustomButton title=" Add Customer" onPress={() => navigation.goBack()} />
      <Tab.Navigator tabBarPosition="top"
        tabBarOptions={{
          tabStyle: { width: 102 },
          activeTintColor: 'white',
          inactiveTintColor: '#fff',
          style: { backgroundColor: '#ffa600' },
          indicatorStyle: {
            backgroundColor: '#fff',
            height: 9
          },
          scrollEnabled: true,
          labelStyle: { fontSize: 16, textTransform: 'none' }
        }}>
        <Tab.Screen name="Details" component={Details}/>
        <Tab.Screen name="Other  Details" component={OtherDetails}/>
        <Tab.Screen name="Address" component={Address} />
        <Tab.Screen name="Contact Person" component={ContactPerson} />
      </Tab.Navigator>
      <TouchableOpacity style={styles.buttonsubmit} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffa600',
  },
  title: {
    marginLeft: 34,
    marginTop: 10,
    fontSize: 15,
    color: 'white',
    bottom: 5
  },
  button22: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffa600',
  },
  buttonsubmit: {
    backgroundColor: '#ffa600',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
    alignSelf: 'center',
    width: 300,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AddCustomer;
