import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace() {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
