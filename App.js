import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [working, setWorking] = useState(true);
  const clothes = () => setWorking(false);
  const foods = () => setWorking(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Dronp</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="상품 검색"
          placeholderTextColor="#94B8FF"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.division}>
        <Text style={styles.DivisionText}>분류</Text>
      </View>
      <View style={styles.SelectContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: "#EBEBEB", height: 35, borderRadius: 12 }}
        >
          <TouchableOpacity onPress={clothes}>
            <Text
              style={{
                ...styles.SelectText,
                color: working ? "black" : "#94B8FF",
              }}
            >
              의류
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={foods}>
            <Text
              style={{
                ...styles.SelectText,
                color: !working ? "black" : "#94B8FF",
              }}
            >
              음식
            </Text>
          </TouchableOpacity>
          <Text style={styles.SelectText}>생활용품</Text>
          <Text style={styles.SelectText}>인테리어</Text>
          <Text style={styles.SelectText}>유아용품</Text>
        </ScrollView>
      </View>
      <View style={styles.GoodsContainer}>
        {!working ? (
          <TouchableOpacity style={styles.touchGoods}>
            <View style={styles.ListOfGoods}>
              <Text>청바지</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.ListOfGoods}>
              <Text>홍콩반점</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    marginTop: 80,
  },

  SelectContainer: {
    marginTop: 10,
  },

  SelectText: {
    fontSize: 20,
    marginTop: 7,
    marginLeft: 20,
    marginRight: 10,
  },

  division: {
    marginTop: 20,
  },

  DivisionText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  btnText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },

  ListOfGoods: {
    backgroundColor: "#ffffff",
    width: 160,
    height: 170,
    borderRadius: 15,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
  },

  touchGoods: {
    width: 160,
    height: 170,
  },

  searchInput: {
    fontSize: 15,
    height: 50,
    backgroundColor: "#EBEBEB",
    borderRadius: 12,
    paddingHorizontal: 20,
  },

  GoodsContainer: {
    marginTop: 100,
  },
});
