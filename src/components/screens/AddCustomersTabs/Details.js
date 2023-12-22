// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// import { Dropdown } from 'react-native-element-dropdown';
// import { getEmployeeData } from '../../../api/CustomerCreationAPI';
// import { CheckBox } from 'react-native-elements';
// import { Button } from 'react-native-paper';

// const customerTitles = [
//   { label: 'Mr', value: 'Mr' },
//   { label: 'Mrs', value: 'Mrs' },
//   { label: 'Miss', value: 'Miss' },
//   { label: 'Ms', value: 'Ms' },
// ];

// const mopOptions = [
//   { label: 'Cash', value: 'Cash' },
//   { label: 'Cash and Credit', value: 'Cash and Credit' },
// ];
// const typeCustomer = [
//   { label: 'B2B', value: 'B2B' },
//   { label: 'B2C', value: 'B2C' },
// ];

// const Details = () => {
//   const [DetailsFormData, setDetailsFormData] = useState({
//     customerType:'',
//     customerName: '',
//     customerType: '',
//     emailAddress: '',
//     salesPerson: '',
//     collectionAgent: '',
//     mop: '',
//     mobileNumber: '',
//     whatsappNumber: '',
//     landlineNumber: '',
//     fax: '',
// })
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [employeeData, setEmployeeData] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const employeeData1 = await getEmployeeData();
//         const fetchedEmployees = employeeData1.map(employeeData => ({
//           label: employeeData.name,
//           value: employeeData.name,
//         }))
//         setEmployeeData(fetchedEmployees);
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSelectEmployee = (item) => {
//     handleFieldChange('salesPerson',item);
//     setShowDropdown(false);
//   };
//   const handleFieldChange = (field,value) => {
//     setDetailsFormData({
//         ...DetailsFormData,
//         [field]: value,
//     });
// };
//   return (
//     <ScrollView style={styles.mainContainer}>
//       <View style={styles.container}>
//         <Text style={styles.label}>Customer Type:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={typeCustomer}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Customer Type"
//           placeholderStyle={{ color: '#999', fontSize: 16}}
//           onChange={(item) => handleFieldChange('customerType',item.label)}
//         />
//         <Text style={styles.label}>Customer Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Customer Name"
//           value={DetailsFormData.customerName}
//           onChangeText={(text) => handleFieldChange('customerName', text)}
//         />

//         <Text style={styles.label}>Customer Title:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={customerTitles}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Customer Title"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           dropdownTextStyle={{ fontSize: 10 }}
//           onChange={(item) => handleFieldChange('customerTitle', item.label)}
//         />

//         <Text style={styles.label}>Email Address:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Email Address"
//           keyboardType="email-address"
//           value={DetailsFormData.emailAddress}
//           onChangeText={(text) => handleFieldChange('emailAddress', text)}
//         />

//         <Text style={styles.label}>Sales Person:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={employeeData}
//           search
//           searchPlaceholder="Search Sales Person..."
//           labelField="label"
//           valueField="value"
//           placeholder="Select Employee Name"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleSelectEmployee(item.value)}
//         />

//         <Text style={styles.label}>Collection Agent:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Collection Agent"
//           value={DetailsFormData.collectionAgent}
//           onChangeText={(text) => handleFieldChange('collectionAgent', text)}
//         />

//         <Text style={styles.label}>MOP (Mode of Payment):</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={mopOptions}
//           labelField="label"
//           valueField="value"
//           placeholder="Select MOP"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('mop', item.value)}
//         />

//         <Text style={styles.label}>Mobile Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Mobile Number"
//           keyboardType="numeric"
//           value={DetailsFormData.mobileNumber}
//           onChangeText={(text) => handleFieldChange('mobileNumber', text)}
//         />

//         <Text style={styles.label}>Whatsapp Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Whatsapp Number"
//           keyboardType="numeric"
//           value={DetailsFormData.whatsappNumber}
//           onChangeText={(text) => handleFieldChange('whatsappNumber', text)}
//         />

//         <Text style={styles.label}>Landline Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Landline Number"
//           keyboardType="numeric"
//           value={DetailsFormData.landlineNumber}
//           onChangeText={(text) => handleFieldChange('landlineNumber', text)}
//         />
//         <Text style={styles.label}>Fax:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Fax"
//           keyboardType="numeric"
//           value={DetailsFormData.fax}
//           onChangeText={(text) => handleFieldChange('fax', text)}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer:{
//     flex:1,
//     backgroundColor:'#fff'
//   },
//   container: {
//     flex:1,
//     marginHorizontal:30,
//     backgroundColor: '#fff',
//     marginTop:10
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
//     fontSize:16
//   },
//     dropdown: {
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingLeft: 10
//   },
//   submitButton: {
//     backgroundColor: '#7a42f4',
//     padding: 10,
//     margin: 15,
//     height: 40,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: 'white',
//   }
// });

// export default Details;

 


import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import { getEmployeeData } from '../../../api/CustomerCreationAPI';
import { CheckBox } from 'react-native-elements';
import { Button } from 'react-native-paper';

const customerTitles = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Ms', value: 'Ms' },
];

const mopOptions = [
  { label: 'Cash', value: 'Cash' },
  { label: 'Cash and Credit', value: 'Cash and Credit' },
];
const typeCustomer = [
  { label: 'B2B', value: 'B2B' },
  { label: 'B2C', value: 'B2C' },
];

const Details = ({ route }) => {
  const {formData, handleFieldChange } = route.params;
  const [showDropdown, setShowDropdown] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeData1 = await getEmployeeData();
        const fetchedEmployees = employeeData1.map(employeeData => ({
          label: employeeData.name,
          value: employeeData.name,
        }))
        setEmployeeData(fetchedEmployees);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelectEmployee = (item) => {
    handleFieldChange('salesPerson',item);
    setShowDropdown(false);
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Customer Type:</Text>
        <Dropdown
          style={styles.dropdown}
          data={typeCustomer}
          labelField="label"
          valueField="value"
          placeholder="Select Customer Type"
          placeholderStyle={{ color: '#999', fontSize: 16}}
          onChange={(item) => handleFieldChange('customerType',item.label)}
        />
        <Text style={styles.label}>Customer Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Customer Name"
          value={formData.customerName}
          onChangeText={(text) => handleFieldChange('customerName', text)}
        />

        <Text style={styles.label}>Customer Title:</Text>
        <Dropdown
          style={styles.dropdown}
          data={customerTitles}
          labelField="label"
          valueField="value"
          placeholder="Select Customer Title"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          dropdownTextStyle={{ fontSize: 10 }}
          onChange={(item) => handleFieldChange('customerTitle', item.label)}
        />

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={formData.emailAddress}
          onChangeText={(text) => handleFieldChange('emailAddress', text)}
        />

        <Text style={styles.label}>Sales Person:</Text>
        <Dropdown
          style={styles.dropdown}
          data={employeeData}
          search
          searchPlaceholder="Search Sales Person..."
          labelField="label"
          valueField="value"
          placeholder="Select Employee Name"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleSelectEmployee(item.value)}
        />

        <Text style={styles.label}>Collection Agent:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Collection Agent"
          value={formData.collectionAgent}
          onChangeText={(text) => handleFieldChange('collectionAgent', text)}
        />

        <Text style={styles.label}>MOP (Mode of Payment):</Text>
        <Dropdown
          style={styles.dropdown}
          data={mopOptions}
          labelField="label"
          valueField="value"
          placeholder="Select MOP"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('mop', item.value)}
        />

        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          value={formData.mobileNumber}
          onChangeText={(text) => handleFieldChange('mobileNumber', text)}
        />

        <Text style={styles.label}>Whatsapp Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Whatsapp Number"
          keyboardType="numeric"
          value={formData.whatsappNumber}
          onChangeText={(text) => handleFieldChange('whatsappNumber', text)}
        />

        <Text style={styles.label}>Landline Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Landline Number"
          keyboardType="numeric"
          value={formData.landlineNumber}
          onChangeText={(text) => handleFieldChange('landlineNumber', text)}
        />
        <Text style={styles.label}>Fax:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fax"
          keyboardType="numeric"
          value={formData.fax}
          onChangeText={(text) => handleFieldChange('fax', text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#fff'
  },
  container: {
    flex:1,
    marginHorizontal:30,
    backgroundColor: '#fff',
    marginTop:10
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
    fontSize:16
  },
    dropdown: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
  }
});

export default Details;

 
