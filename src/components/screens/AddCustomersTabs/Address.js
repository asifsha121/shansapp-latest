// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { getCountryData } from '../../../api/CustomerCreationAPI';
// import axios from 'axios';
// import { baseUrl } from '../../../api/const';

// const Address = () => {
//   const [formData, setFormData] = useState({
//     address: '',
//     country: '',
//     state: '',
//     area: '',
//     poBox: '',
//   });

//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [areas, setAreas] = useState([]);

//   const fetchData2 = async (stateId) => {
//     try {
//       const response = await axios.get(`${baseUrl}/viewArea/area_list/drop_down`);
//       const areaData = response.data.data;

//       // Filter states based on the provided stateId
//       const filteredAreas = areaData.filter(area => area.state.state_id === stateId);

//       return filteredAreas;
//     } catch (error) {
//       console.error('Error fetching area data:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };
//   const fetchData1 = async (countryId) => {
//     try {
//       const response = await axios.get(`${baseUrl}/viewState/state_list/state_drop_down`);
//       const stateData = response.data.data;

//       // Filter states based on the provided countryId
//       const filteredStates = stateData.filter(state => state.country.country_id === countryId);

//       return filteredStates;
//     } catch (error) {
//       console.error('Error fetching state data:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   const handleStateChange = async (selectedState) => {
//     setFormData({
//       ...formData,
//       state: selectedState.label,
//     });
//     try {
//       const areaData = await fetchData2(selectedState.value);
//       const fetchedAreas = areaData.map(area => ({
//         label: area.area_name,
//         value: area._id,
//       }));
//       setAreas(fetchedAreas);
//     } catch (error) {
//       console.error('Error fetching area data:', error);
//     }
//   };

//   const handleCountryChange = async (selectedCountry) => {
//     setFormData({
//       ...formData,
//       country: selectedCountry.label,
//     });
//     try {
//       const stateData = await fetchData1(selectedCountry.value);
//       const fetchedStates = stateData.map(state => ({
//         label: state.state_name,
//         value: state._id,
//       }));
//       setStates(fetchedStates);
//     } catch (error) {
//       console.error('Error fetching state data:', error);
//     }
//   };

//   const handleFieldChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const countryData = await getCountryData();
//         const fetchedCountries = countryData.map(country => ({
//           label: country.country_name,
//           value: country._id,
//         }));
//         setCountries(fetchedCountries);
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.container}>
//         <Text style={styles.label}>Address:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Address"
//           value={formData.address}
//           onChangeText={(text) => handleFieldChange('address', text)}
//         />
//         <Text style={styles.label}>Country:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={countries}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Country"
//           placeholderStyle={{ color: '#999', fontSize: 16}}
//           onChange={(item) => handleCountryChange(item)}
//         />
//         <Text style={styles.label}>State:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={states}
//           labelField="label"
//           valueField="value"
//           placeholder="Select State"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleStateChange(item)}
//         />
//         <Text style={styles.label}>Area:</Text>
//         <Dropdown
//           style={styles.dropdown}
//           data={areas}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Area"
//           placeholderStyle={{ color: '#999', fontSize: 16 }}
//           onChange={(item) => handleFieldChange('area', item.label)}
//         />
//         <Text style={styles.label}>PO Box:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter PO Box"
//           keyboardType="numeric"
//           value={formData.poBox}
//           onChangeText={(text) => handleFieldChange('poBox', text)}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'white', 
//     flex: 1, 
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
//   dropdown: {
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingLeft: 10,
//     fontSize: 16
//   },
// });

// export default Address;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getCountryData } from '../../../api/CustomerCreationAPI';
import axios from 'axios';
import { baseUrl } from '../../../api/const';


const Address = ({ route }) => {
  const {formData, handleFieldChange } = route.params;
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);

  const fetchData2 = async (stateId) => {
    try {
      const response = await axios.get(`${baseUrl}/viewArea/area_list/drop_down`);
      const areaData = response.data.data;

      // Filter states based on the provided stateId
      const filteredAreas = areaData.filter(area => area.state.state_id === stateId);

      return filteredAreas;
    } catch (error) {
      console.error('Error fetching area data:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const fetchData1 = async (countryId) => {
    try {
      const response = await axios.get(`${baseUrl}/viewState/state_list/state_drop_down`);
      const stateData = response.data.data;

      // Filter states based on the provided countryId
      const filteredStates = stateData.filter(state => state.country.country_id === countryId);

      return filteredStates;
    } catch (error) {
      console.error('Error fetching state data:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleStateChange = async (selectedState) => {
    handleFieldChange('state',item)
    try {
      const areaData = await fetchData2(selectedState.value);
      const fetchedAreas = areaData.map(area => ({
        label: area.area_name,
        value: area._id,
      }));
      setAreas(fetchedAreas);
    } catch (error) {
      console.error('Error fetching area data:', error);
    }
  };

  const handleCountryChange = async (selectedCountry) => {
    handleFieldChange('country',item)
    try {
      const stateData = await fetchData1(selectedCountry.value);
      const fetchedStates = stateData.map(state => ({
        label: state.state_name,
        value: state._id,
      }));
      setStates(fetchedStates);
    } catch (error) {
      console.error('Error fetching state data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryData = await getCountryData();
        const fetchedCountries = countryData.map(country => ({
          label: country.country_name,
          value: country._id,
        }));
        setCountries(fetchedCountries);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={formData.address}
          onChangeText={(text) => handleFieldChange('address', text)}
        />
        <Text style={styles.label}>Country:</Text>
        <Dropdown
          style={styles.dropdown}
          data={countries}
          labelField="label"
          valueField="value"
          placeholder="Select Country"
          placeholderStyle={{ color: '#999', fontSize: 16}}
          onChange={(item) => handleCountryChange(item)}
        />
        <Text style={styles.label}>State:</Text>
        <Dropdown
          style={styles.dropdown}
          data={states}
          labelField="label"
          valueField="value"
          placeholder="Select State"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleStateChange(item)}
        />
        <Text style={styles.label}>Area:</Text>
        <Dropdown
          style={styles.dropdown}
          data={areas}
          labelField="label"
          valueField="value"
          placeholder="Select Area"
          placeholderStyle={{ color: '#999', fontSize: 16 }}
          onChange={(item) => handleFieldChange('area', item.label)}
        />
        <Text style={styles.label}>PO Box:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter PO Box"
          keyboardType="numeric"
          value={formData.poBox}
          onChangeText={(text) => handleFieldChange('poBox', text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white', 
    flex: 1, 
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
    paddingLeft: 10,
    fontSize: 16
  },
});

export default Address;

