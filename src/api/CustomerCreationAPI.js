import axios from 'axios';
import { baseUrl } from './const';



export const getLanguageData = async () => {
    try {
      const languageUrl = `${baseUrl}/viewLanguage/language_list/language_dropdown`;
      const response = await axios.get(languageUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching language data:', error);
    throw error; // Rethrow the error to handle it in the component
    }
  };
export const getEmployeeData = async () =>{
    try {
        const emplpoyeeUrl = `${baseUrl}/viewEmployees/employee_list/employee_dropdown`;
        const response = await axios.get(emplpoyeeUrl);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching Emoloyee data:', error);
        throw error; 
    };
}
export const getCountryData = async () =>{
    try {
        const countryData = `${baseUrl}/viewCountry/country_list/country_dropdown`;
        const response = await axios.get(countryData);
        return response.data.data
    } catch (error) {
        console.error('Error fetching country data:', error);
        throw error;}
}
export const getCurrencyData = async () =>{
    try {
        const Url = `${baseUrl}/viewCurrency/currency_list/currency_dropdown`;
        const response = await axios.get(Url);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching currency data:', error);
        throw error; 
    };
}

export const getRoleData = async () =>{
    try {
        const Url = `${baseUrl}/viewRole/role_list/role_dropdown`;
        const response = await axios.get(Url);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching role data:', error);
        throw error; 
    };
}


// export const getData = async () =>{
//     try {
//         const Url = `${baseUrl}/`;
//         const response = await axios.get(Url);
//         return response.data.data;
//       } catch (error) {
//         console.error('Error fetching  data:', error);
//         throw error; 
//     };
// }

// useEffect(() => {
//   const fetchData1 = async () => {
//     try {
//       const Data = await getData();
//       const fetched__ = Data.map(data => ({
//         label: ,
//         value: ,
//       }))
//       setLanguages(fetched__);
//     } catch (error) {
//     }
//   };
//   fetchData1();
// }, []);