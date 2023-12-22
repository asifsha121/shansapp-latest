// import React, { useState } from 'react';
// import Details from './Details'; // Adjust the path as needed
// import OtherDetails from './OtherDetails';
// import Address from './Address';
// import ContactPerson from './ContactPerson';
// const ParentComponent = () => {
//   const [formData, setFormData] = useState({
//     customerType: '', // Unique field name
//     customerName: '',
//     emailAddress: '',
//     salesPerson: '',
//     collectionAgent: '',
//     mop: '',
//     mobileNumber: '',
//     whatsappNumber: '',
//     landlineNumber: '',
//     fax: '',
//     trn: '',
//     customerBehaviour: '',
//     isActive: false,
//     customerAttitude: '',
//     language: '',
//     currency: '',
//     isSupplier: false,
//     address: '',
//     country: '',
//     state: '',
//     area: '',
//     poBox: '',
//   });
//   const [contactPersonFormdata, setContactPersonFormdata] = useState([]);

//   const handleFieldChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };

//   return (
//     <>
//     <Details formData={formData} handleFieldChange={handleFieldChange}/>
//     <OtherDetails formData={formData} handleFieldChange={handleFieldChange}/>
//     <Address formData={formData} handleFieldChange={handleFieldChange}/>
//     <ContactPerson contactPersonFormdata={contactPersonFormdata} setContactPersonFormdata={setContactPersonFormdata}/>
//     </>


//   );
// };

// export default ParentComponent;