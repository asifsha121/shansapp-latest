import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList,TouchableWithoutFeedback } from "react-native";
import { Searchbar } from "react-native-paper";
import { FAB, ActivityIndicator } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { baseUrl } from "../../api/const";
import { AntDesign } from '@expo/vector-icons';
import CustomerItem from "../Customeritem";

const CustomButton = ({ title, onPress }) => {
  return (
      <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.button}>
          <AntDesign name="left" size={14} color="black" />
          <Text style={styles.title}>{title}</Text>
          </View>
      </TouchableWithoutFeedback>
      );
 };
export default function Customers({ navigation }) {
  const contacturl = `${baseUrl}/viewCustomers`;
  const searchurl = `${contacturl}?name=`;
  const [names, setNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#ffa600" />
      </View>
    );
  };

  const loadMoreItem = () => {
    if (loadingMore) return; // Prevent multiple calls while loading
    setLoadingMore(true);
    setOffset(offset + 1);
  };

  const fetchContacts = () => {
    axios.get(`${contacturl}?offset=${offset}&limit=20`)
      .then((res) => {
        const namesArray = res.data.data.map((item) => ({
          name: item.name,
          customer_mobile: item.customer_mobile,
          _id: item._id,
          language_id: item.language_id,
          country_id: item.country_id,
          currency_id: item.currency_id,
          trn_no: item.trn_no,
          state_id: item.state_id,
          pipeline_id: item.pipelines,
          address: item.address,
          customer_credit_ledger: item.customer_credit_ledger,
          image_url: item.image_url,
        }));
        setNames((prevNames) => [...prevNames, ...namesArray]);
        setFilteredNames((prevFilteredNames) => [...prevFilteredNames, ...namesArray]);
        setLoadingMore(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchContacts();
  }, [offset]);

  useEffect(() => {
    if (searchQuery !== "") {
      axios.get(searchurl + searchQuery)
        .then((res) => {
          const filteredResults = res.data.data.map((item) => ({
            name: item.name,
            customer_mobile: item.customer_mobile,
            _id: item._id,
          }));
          setFilteredNames(filteredResults);
        })
        .catch(err => console.log(err));
    } else {
      setFilteredNames(names);
    }
  }, [searchQuery, names]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffa600" />
      <CustomButton title="Customers"  onPress={() => navigation.goBack()} />

      <Searchbar
        placeholder="Search customers"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          borderRadius: 0,
          borderWidth: 12,
          borderColor: '#ffa600',
          backgroundColor: "white",
        }}
      />
      <View style={styles.contactscroll}>
        <FlatList
          data={filteredNames}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <CustomerItem item={item} />}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.1}
          ListFooterComponent={loadingMore ? renderLoader : null}
        />
      </View>
      <FAB
        style={styles.fab}
        icon={() => <MaterialIcons name="add" size={24} color="white" />}
        onPress={() => navigation.navigate('AddCustomer')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 28,
    bottom: 100,
    backgroundColor: '#ffa600',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactscroll: {
    flex: 1,
  },
  loaderStyle: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffa600",
    },
title: {
    marginLeft: 34,
    fontSize: 15,
    color: "white"
    },
});
