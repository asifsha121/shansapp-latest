// import { StatusBar } from 'expo-status-bar';
// import React, { useState,useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { getRoleData } from '../../../api/CustomerCreationAPI';

// const ContactPerson = () => {
//   const [contactPersonFormdata, setContactPersonFormdata] = useState([]);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isModalVisible1, setModalVisible1] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [roles, setRoles] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const roleData = await getRoleData();
//         const fetchedRoles = roleData.map(Roledata => ({
//           label:Roledata.role_name,
//           value:Roledata.role_name,
//         }))
//         setRoles(fetchedRoles);
//       } catch (error) {
//         console.error('Error fetching Roles data:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   const addContact = () => {
//     setModalVisible(false);
//     setContactPersonFormdata([...contactPersonFormdata, { name: '', email: '', number: '', role: '' }]);
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedContactPersonFormdata = [...contactPersonFormdata];
//     updatedContactPersonFormdata[index] = {
//       ...updatedContactPersonFormdata[index],
//       [field]: value,
//     };
//     setContactPersonFormdata(updatedContactPersonFormdata);
//   };

//   const removeContact = (selectedIndex) => {
//     const updatedContactPersonFormdata = [...contactPersonFormdata];
//     updatedContactPersonFormdata.splice(selectedIndex, 1);
//     setContactPersonFormdata(updatedContactPersonFormdata);
//     setModalVisible1(!isModalVisible1);
//   };
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const toggleModal1 = (index) => {
//     setModalVisible1(!isModalVisible1);
//     setSelectedIndex(index);
//   };
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.columnHeader}>Contact Name</Text>
//           <Text style={styles.columnHeader}>Contact Email</Text>
//           <Text style={styles.columnHeader}>Contact Number</Text>
//           <Text style={styles.columnHeader}>Contact Role</Text>
//           <View style={styles.addButtonContainer}>
//             <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
//               <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {contactPersonFormdata.map((contact, index) => (
//           <View key={index} style={styles.contactRow}>
//             <TextInput
//               style={styles.input1}
//               placeholder="Enter Name"
//               multiline
//               value={contact.name}
//               onChangeText={(text) => handleInputChange(index, 'name', text)}
//             />
//             <TextInput
//               style={styles.input2}
//               placeholder="Enter Email"
//               value={contact.email}
//               multiline
//               onChangeText={(text) => handleInputChange(index, 'email', text)}
//             />
//             <TextInput
//               style={styles.input3}
//               placeholder="Enter Number"
//               value={contact.number}
//               multiline
//               onChangeText={(text) => handleInputChange(index, 'number', text)}
//             />
//             <Dropdown
//             style={styles.input4}
//             data={roles}
//             labelField="label"
//             valueField="value"
//             placeholder="Select Roles"
//             placeholderStyle={{color:'grey',fontSize:14}}
//             selectedTextStyle={{fontSize:14}}
//             itemTextStyle={{fontSize:14}}
//             itemContainerStyle={{
//               width:140,
//               right:10,
//               backgroundColor: '#fff', // Background color of each item
//               borderBottomColor: '#ddd', // Border color between items
//               borderBottomWidth: 1, // Border width between items
//             }} 
//             onChange={(value) => handleInputChange(index, 'role', value.value)}
//             />
//             <TouchableOpacity style={styles.deleteButton}
//             onPress={()=>toggleModal1(index)}>
//               <Text style={styles.buttonText}>X</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//      {/* Confirmation Modal */}
//      <Modal visible={isModalVisible} animationType="fade"  onRequestClose={toggleModal}>
//           <View style={styles.modalContainer}>
//           <StatusBar
//                     backgroundColor="#fff" // Change this to the desired background color
//           />
//             <Text style={styles.modalText}>Do you want to add a new Contact Person?</Text>
//             <View style={styles.modalButtons}>
//               <TouchableOpacity style={styles.modalButton} onPress={addContact}>
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//         <Modal visible={isModalVisible1} animationType="fade"  onRequestClose={toggleModal1}>
//           <View style={styles.modalContainer}>
//           <StatusBar
//                     backgroundColor="#fff" // Change this to the desired background color
//           />
//             <Text style={styles.modalText}>Are you sure you want to Delete Contact Person?</Text>
//             <View style={styles.modalButtons}>
//             <TouchableOpacity style={styles.modalButton} onPress={() => removeContact(selectedIndex)}>
//                 <Text style={styles.modalButtonText}>Yes</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButton} onPress={toggleModal1}>
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//     backgroundColor: '#fff',
//     paddingLeft: 30,
//     paddingRight: 30,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   columnHeader: {
//     fontSize: 14,
//     width: '22%',
//     right: 18,
//   },
//   addButtonContainer: {
//     width: '22%',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   addButton: {
//     backgroundColor: '#ffa600',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight:25
//   },
//   deleteButton: {
//     backgroundColor: '#ff3333',
//     paddingHorizontal:10,
//     height: 30,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight:15,
//     marginTop:5,
//     right:12
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   contactRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   input2: {
//     height: 40,
//     borderWidth: 0.5,
//     borderColor: 'black',
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     width: '22%',
//     right: 25,
//     marginRight: 2,
//   },
//   input1: {
//     height: 40,
//     borderWidth: 0.5,
//     borderColor: 'black',
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     width: '22%',
//     right: 25,
//     marginRight: 2,
//   },
//   input3: {
//     height: 40,
//     borderWidth: 0.5,
//     borderColor: 'black',
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     width: '22%',
//     right: 25,
//     marginRight: 2,
//   },
//   input4: {
//     height: 40,
//     borderWidth: 0.5,
//     borderColor: 'black',
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     width: '30%',
//     right: 25,
//   },
//   modalContainer: {
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     top: 270,
//     elevation: 15,
//     borderRadius: 40, // Adjust the value as needed for the desired curvature
//     width:350,
//     left:30
//   },
//   modalText: {
//     fontSize: 20,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     width:200
//   },
//   modalButton: {
//     backgroundColor: '#ffa600',
//     padding: 15,
//     borderRadius: 8,
//     width: '40%',
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default ContactPerson;




import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getRoleData } from '../../../api/CustomerCreationAPI';

const ContactPerson = ({contactPersonFormdata, setContactPersonFormdata}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const roleData = await getRoleData();
        const fetchedRoles = roleData.map(Roledata => ({
          label:Roledata.role_name,
          value:Roledata.role_name,
        }))
        setRoles(fetchedRoles);
      } catch (error) {
        console.error('Error fetching Roles data:', error);
      }
    };
    fetchData();
  }, []);
  const addContact = () => {
    setModalVisible(false);
    setContactPersonFormdata([...contactPersonFormdata, { name: '', email: '', number: '', role: '' }]);
  };
  const handleInputChange = (index, field, value) => {
    const updatedContactPersonFormdata = [...contactPersonFormdata];
    updatedContactPersonFormdata[index] = {
      ...updatedContactPersonFormdata[index],
      [field]: value,
    };
    setContactPersonFormdata(updatedContactPersonFormdata);
  };

  const removeContact = (selectedIndex) => {
    const updatedContactPersonFormdata = [...contactPersonFormdata];
    updatedContactPersonFormdata.splice(selectedIndex, 1);
    setContactPersonFormdata(updatedContactPersonFormdata);
    setModalVisible1(!isModalVisible1);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = (index) => {
    setModalVisible1(!isModalVisible1);
    setSelectedIndex(index);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.columnHeader}>Contact Name</Text>
          <Text style={styles.columnHeader}>Contact Email</Text>
          <Text style={styles.columnHeader}>Contact Number</Text>
          <Text style={styles.columnHeader}>Contact Role</Text>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {contactPersonFormdata.map((contact, index) => (
          <View key={index} style={styles.contactRow}>
            <TextInput
              style={styles.input1}
              placeholder="Enter Name"
              multiline
              value={contact.name}
              onChangeText={(text) => handleInputChange(index, 'name', text)}
            />
            <TextInput
              style={styles.input2}
              placeholder="Enter Email"
              value={contact.email}
              multiline
              onChangeText={(text) => handleInputChange(index, 'email', text)}
            />
            <TextInput
              style={styles.input3}
              placeholder="Enter Number"
              value={contact.number}
              multiline
              onChangeText={(text) => handleInputChange(index, 'number', text)}
            />
            <Dropdown
            style={styles.input4}
            data={roles}
            labelField="label"
            valueField="value"
            placeholder="Select Roles"
            placeholderStyle={{color:'grey',fontSize:14}}
            selectedTextStyle={{fontSize:14}}
            itemTextStyle={{fontSize:14}}
            itemContainerStyle={{
              width:140,
              right:10,
              backgroundColor: '#fff', // Background color of each item
              borderBottomColor: '#ddd', // Border color between items
              borderBottomWidth: 1, // Border width between items
            }} 
            onChange={(value) => handleInputChange(index, 'role', value.value)}
            />
            <TouchableOpacity style={styles.deleteButton}
            onPress={()=>toggleModal1(index)}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
     {/* Confirmation Modal */}
     <Modal visible={isModalVisible} animationType="fade"  onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
          <StatusBar
                    backgroundColor="#fff" // Change this to the desired background color
          />
            <Text style={styles.modalText}>Do you want to add a new Contact Person?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={addContact}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal visible={isModalVisible1} animationType="fade"  onRequestClose={toggleModal1}>
          <View style={styles.modalContainer}>
          <StatusBar
                    backgroundColor="#fff" // Change this to the desired background color
          />
            <Text style={styles.modalText}>Are you sure you want to Delete Contact Person?</Text>
            <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={() => removeContact(selectedIndex)}>
                <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal1}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  columnHeader: {
    fontSize: 14,
    width: '22%',
    right: 18,
  },
  addButtonContainer: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addButton: {
    backgroundColor: '#ffa600',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:25
  },
  deleteButton: {
    backgroundColor: '#ff3333',
    paddingHorizontal:10,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:15,
    marginTop:5,
    right:12
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input2: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '22%',
    right: 25,
    marginRight: 2,
  },
  input1: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '22%',
    right: 25,
    marginRight: 2,
  },
  input3: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '22%',
    right: 25,
    marginRight: 2,
  },
  input4: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '30%',
    right: 25,
  },
  modalContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    top: 270,
    elevation: 15,
    borderRadius: 40, // Adjust the value as needed for the desired curvature
    width:350,
    left:30
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width:200
  },
  modalButton: {
    backgroundColor: '#ffa600',
    padding: 15,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ContactPerson;

