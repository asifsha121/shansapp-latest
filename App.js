import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/components/screens/Splash";
import LoginScreen from "./src/components/screens/LoginScreen";
import Signup from './src/components/screens/RegistrationScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./src/components/screens/RegistrationScreen";
import BottomDrawer from "./src/routes/BottomDrawer";
import Home from "./src/components/screens/Home";
import ProductScreen from "./src/components/screens/ProductScreen";
import Customers from "./src/components/screens/Customers";
import AddCustomer from "./src/components/screens/AddCustomer";
import OptionScreen from "./src/components/screens/OptionScreen";
import CustomerDetails from "./src/components/screens/CustomerDetails";
import ProductDetails from "./src/components/screens/ProductDetails";
import MyOrdersScreen from "./src/components/screens/Myorders";
import OrderDetails from "./src/components/screens/OrderDetails"
import CashCollection from "./src/components/screens/CashCollection";
import NewCollection from "./src/components/screens/NewCollection";
import Scanner from "./src/components/QrScanner/Scanner";
import Sign from "./src/components/Sign/Sign";
import Privacy from "./src/components/screens/PrivacyPolicy";
import Enquiry from "./src/components/screens/ProductEnquiry";
import SerialScanner from "./src/components/QrScanner/SerialScanner";
import Jobs from "./src/components/screens/Jobs";
import AddJob from "./src/components/screens/AddJob";
import JobDetails from "./src/components/JobScreen/JobDetails";
import ReAssign from "./src/components/JobScreen/Reassign";
import CancelService from "./src/components/JobScreen/CancelService";
import EditService from "./src/components/JobScreen/EditService";
import TaskStatistics from "./src/components/screens/TaskStatistics";


const Stack = createNativeStackNavigator();

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import TaskManager from "./src/components/screens/TaskManager";
import AddTask from "./src/components/screens/AddTask";
import BarCode from "./src/components/QrScanner/BarCode";
import FullImageScreen from "./src/components/screens/FullImageScreen";
import TasksUpdate from "./src/components/screens/TasksUpdate";
import TaskUpdateFullScreenImage from "./src/components/screens/TaskUpdateFullScreenImage";
import TaskStatisticsLIst from "./src/components/screens/TaskStatisticsList";
import MarketStudies from "./src/components/screens/marketstudies";
import NewMarketStudies from "./src/components/screens/newmarketstudy";
import Attendance from "./src/components/screens/attendance";
import MarketStudyDetails from "./src/components/screens/MarketStudyDetails";



const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),


  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),

  requireToast: ({ text1, text2 }) => (
    <View style={{ padding: 5, flex: 1, backgroundColor: 'red', marginVertical: 15, width: '70%', borderRadius: 12, borderLeftWidth: 3.5, borderWidth: 0.9, borderColor: "white", marginVertical: "50%" }}>
      <View style={{ marginHorizontal: 5, alignContent: "center" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "white" }}>{text1} !!!</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>{text2}</Text>
      </View>
    </View>
  ),

  invoiceSuccessToast: ({ text1, text2 }) => (
    <View style={{ padding: 5, flex: 1, backgroundColor: 'white', marginVertical: 10, width: '80%', borderRadius: 10, borderBottomWidth: 4.5, borderBottomColor: "green", marginVertical: "50%" }}>
      <View style={{ marginHorizontal: 5, marginVertical: 10, alignContent: "center" }}>
        <Text style={{
          fontSize: 15,
          fontWeight: '400', color: "green"
        }}>{text1}</Text>
        <Text style={{ fontSize: 15, fontWeight: "400", color: "black" }}>{text2}</Text>
      </View>
    </View>
  )

};



const App = () => {

  return (
    <NavigationContainer>
      <View style={styles.container}>


        <Stack.Navigator screenOptions={({ route }) => ({

          headerStyle: { backgroundColor: '#ffa600' },
          headerShadowVisible: false,
          headerTintColor: "white"
        })}>
          
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, }} />
          <Stack.Screen name="Reassign" component={ReAssign} options={{ headerShown: false, }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, }} />
          <Stack.Screen name="PrivacyPolicy" component={Privacy} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Privacy Policy", headerShown: false }} />
          <Stack.Screen name="ProductEnquiry" component={Enquiry} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "New Product Enquiry", headerLeft: null, headerShown: false }} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
          <Stack.Screen name="Drawer" component={BottomDrawer} options={{ headerShown: false, }} />
          <Stack.Screen name="Homenav" component={Home} options={{ headerShown: false, }} />
          <Stack.Screen name="JobDetail" component={JobDetails} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Job details", headerShown: false }} />
          <Stack.Screen name="Jobscreen" component={Jobs} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Jobs", headerShown: false, }} />
          <Stack.Screen name="AddJobscreen" component={AddJob} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Add Job", headerShown: false, }} />
          <Stack.Screen name="Customers" component={Customers} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Contacts", headerShown: false, }} />
          <Stack.Screen name="Customerdetails" component={CustomerDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerTintColor: "white", title: "Order Summery", headerShown: false, }} />
          <Stack.Screen name="AddCustomer" component={AddCustomer} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Add Contacts", headerShown: false, }} />
          <Stack.Screen name="OptionScreen" component={OptionScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, headerTintColor: "white", title: "Options" }} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Products Screen" }} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Product Details" }} />
          <Stack.Screen name="Myorders" component={MyOrdersScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Invoice Details" }} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Invoice Details" }} />
          <Stack.Screen name="CashCollection" component={CashCollection} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Cash Collection" }} />
          <Stack.Screen name="NewCollection" component={NewCollection} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "New Collection" }} />
          <Stack.Screen name="Scanner" component={Scanner} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Scanner" }} />
          <Stack.Screen name="SerialScanner" component={SerialScanner} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "SerialScanner" }} />
          <Stack.Screen name="Sign" component={Sign} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Scanner" }} />
          <Stack.Screen name="TaskStat" component={TaskStatistics} options={{ headerShown: false, }} />
          <Stack.Screen name="TaskManager" component={TaskManager} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Task Manager" }} />
          <Stack.Screen name="AddTask" component={AddTask} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Add Task" }} />
          <Stack.Screen name="BarCode" component={BarCode} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Bar Code" }} />
          <Stack.Screen name="FullImage" component={FullImageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TaskUpdateFullScreenImage" component={TaskUpdateFullScreenImage} options={{ headerShown: false }} />
          <Stack.Screen name="TaskUpdate" component={TasksUpdate} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Task Update" }} />
          <Stack.Screen name="Cancel" component={CancelService} options={{ headerShown: false, }} />
          <Stack.Screen name="EditService" component={EditService} options={{ headerShown: false, }} />
          <Stack.Screen name="TaskStatisticsList" component={TaskStatisticsLIst} options={{ headerShown: false }} />
          <Stack.Screen name="Marketstudy" component={MarketStudies} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Market Studies", headerShown: false }} />
          <Stack.Screen name="NewMarketstudy" component={NewMarketStudies}  options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "New Market Study", headerShown: false }} />
          <Stack.Screen name="MarketStudyDetails" component={MarketStudyDetails}  options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Customer Details", headerShown: false }} />
          <Stack.Screen name="Attendance" component={Attendance} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Mark Attendance", headerShown: false }} />
        </Stack.Navigator>
        <Toast config={toastConfig} />
      </View>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
