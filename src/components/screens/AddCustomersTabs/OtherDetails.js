// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { getLanguageData, getCurrencyData } from '../../../api/CustomerCreationAPI';
// import { CheckBox } from 'react-native-elements';

// const customerBehaviours = [
//   { label: 'Fast Payment', value: 'Fast Payment' },
//   { label: 'Normal Payment', value: 'Normal Payment' },
//   { label: 'Delayed Payment', value: 'Delayed Payment' },
// ];

// const customerAttitudes = [
//   { label: 'Option 1', value: 'Option 1' },
//   { label: 'Option 2', value: 'Option 2' },
//   { label: 'Option 3', value: 'Option 3' },
//   { label: 'Option 4', value: 'Option 4' },
// ];

// const OtherDetails = () => {
//   const [formData, setFormData] = useState({
//     trn: '',
//     customerBehaviour: '',
//     isActive: false,
//     customerAttitude: '',
//     language: '',
//     currency: '',
//     isSupplier: false,
//   });

//   const [languages, setLanguages] = useState([]);
//   const [currencies, setCurrencies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const languageData = await getLanguageData();
//         const fetchedLanguages = languageData.map((language) => ({
//           label: language.language_name,
//           value: language.language_name,
//         }));
//         setLanguages(fetchedLanguages);
//       } catch (error) {}
//     };

//     const fetchData1 = async () => {
//       try {
//         const currenciesData = await getCurrencyData();
//         const fetchedCurrencies = currenciesData.map((currency) => ({
//           label: currency.currency_name,
//           value: currency.currency_name,
//         }));
//         setCurrencies(fetchedCurrencies);
//       } catch (error) {}
//     };

//     fetchData();
//     fetchData1();
//   }, []);

//   const handleFieldChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };
  

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.container}>
//         <Text style={styles.label}>TRN:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter TRN"
//           keyboardType="numeric"
//           value={formData.trn}
//           onChangeText={(text) => handleFieldChange('trn', text)}
//         />

//         <Text style={styles.label}>Customer Behaviour:</Text>
//         <Dropdown
//           style={styles.dropdown1}
//           data={customerBehaviours}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Customer Behaviour"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('customerBehaviour', item.value)}
//         />
//         <View style={styles.checkboxContainer}>
//           <Text style={styles.checkboxLabel}>Is Active</Text>
//           <CheckBox
//             center
//             checkedColor="#ffa600"
//             checked={formData.isActive}
//             size={35}
//             onPress={() => handleFieldChange('isActive', !formData.isActive)}
//           />
//         </View>
//         <Text style={styles.label}>Customer Attitude:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={customerAttitudes}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Customer Attitude"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('customerAttitude', item.value)}
//         />
//         <Text style={styles.label}>Language:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={languages}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Language"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('language', item.value)}
//         />
//         <Text style={styles.label}>Currency:</Text>
//         <Dropdown
//           style={styles.dropdown1}
//           data={currencies}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Currency"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('currency', item.value)}
//         />
//         <View style={styles.checkboxContainer}>
//           <Text style={styles.checkboxLabel}>Is Supplier</Text>
//           <CheckBox
//             center
//             checkedColor="#ffa600"
//             checked={formData.isSupplier}
//             size={35}
//             onPress={() => handleFieldChange('isSupplier', !formData.isSupplier)}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     marginHorizontal: 30,
//     backgroundColor: '#fff',
//     marginTop: 10,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderWidth: 0.5,
//     borderColor: 'black',
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   dropdown: {
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 0,
//     justifyContent: 'space-between',
//     marginRight:200
//   },
//   checkboxLabel: {
//     fontSize: 16,
//     marginRight: 8,
//   },
//   dropdown1: {
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     marginBottom: 0,
//     paddingLeft: 10,
//   },
// });

// export default OtherDetails;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getLanguageData, getCurrencyData } from '../../../api/CustomerCreationAPI';
import { CheckBox } from 'react-native-elements';

const customerBehaviours = [
  { label: 'Fast Payment', value: 'Fast Payment' },
  { label: 'Normal Payment', value: 'Normal Payment' },
  { label: 'Delayed Payment', value: 'Delayed Payment' },
];

const customerAttitudes = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
  { label: 'Option 4', value: 'Option 4' },
];

const OtherDetails = ({ formData, handleFieldChange }) => {
  

  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const languageData = await getLanguageData();
        const fetchedLanguages = languageData.map((language) => ({
          label: language.language_name,
          value: language.language_name,
        }));
        setLanguages(fetchedLanguages);
      } catch (error) {}
    };

    const fetchData1 = async () => {
      try {
        const currenciesData = await getCurrencyData();
        const fetchedCurrencies = currenciesData.map((currency) => ({
          label: currency.currency_name,
          value: currency.currency_name,
        }));
        setCurrencies(fetchedCurrencies);
      } catch (error) {}
    };

    fetchData();
    fetchData1();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>TRN:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter TRN"
          value={formData.trn}
          onChangeText={(text) => handleFieldChange('trn', text)}
        />

        <Text style={styles.label}>Customer Behaviour:</Text>
        <Dropdown
          style={styles.dropdown1}
          data={customerBehaviours}
          labelField="label"
          valueField="value"
          placeholder="Select Customer Behaviour"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('customerBehaviour', item.value)}
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Is Active</Text>
          <CheckBox
            center
            checkedColor="#ffa600"
            checked={formData.isActive}
            size={35}
            onPress={() => handleFieldChange('isActive', !formData.isActive)}
          />
        </View>
        <Text style={styles.label}>Customer Attitude:</Text>
        <Dropdown
          style={styles.dropdown}
          data={customerAttitudes}
          labelField="label"
          valueField="value"
          placeholder="Select Customer Attitude"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('customerAttitude', item.value)}
        />
        <Text style={styles.label}>Language:</Text>
        <Dropdown
          style={styles.dropdown}
          data={languages}
          labelField="label"
          valueField="value"
          placeholder="Select Language"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('language', item.value)}
        />
        <Text style={styles.label}>Currency:</Text>
        <Dropdown
          style={styles.dropdown1}
          data={currencies}
          labelField="label"
          valueField="value"
          placeholder="Select Currency"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('currency', item.value)}
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Is Supplier</Text>
          <CheckBox
            center
            checkedColor="#ffa600"
            checked={formData.isSupplier}
            size={35}
            onPress={() => handleFieldChange('isSupplier', !formData.isSupplier)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dropdown: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    justifyContent: 'space-between',
    marginRight:200
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  dropdown1: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 0,
    paddingLeft: 10,
  },
});

export default OtherDetails;
