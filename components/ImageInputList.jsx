import { ScrollView, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

// ------------------------------------------------------------------------
// required state/functions/props to make this work (should be in parent element/screen)
// const [imageUris, setImageUris] = useState([]);
// ------------------------------------------------------------------------
// const onAddImage = (uri) => {
//   setImageUris([...imageUris, uri]);
// };
// const onRemoveImage = (uri) => {
//   setImageUris(imageUris.filter((image) => image !== uri));
// };
// ------------------------------------------------------------------------
// Props: imageUris, onAddImage, onRemoveImage
// ------------------------------------------------------------------------

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <UserHeader onPress={() => navigation.navigate("Account")} />
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 5,
  },
});
