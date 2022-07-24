import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

// This will be set in the config folder once categories have been decided
const categories = [
  { label: "Meditation", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Massage", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Travel", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ServiceEditScreen = () => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/bell-rock-bg.jpg")}
    >
      <Screen style={styles.screen}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField name="title" placeholder="Title" maxLength={255} />
          <AppFormField
            name="price"
            placeholder="price"
            keyboardType="numeric"
            maxLength={8}
            width={120}
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="category"
            width="50%"
          />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </AppForm>
      </Screen>
    </ImageBackground>
  );
};

export default ServiceEditScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  screen: {
    padding: 10,
  },
});
