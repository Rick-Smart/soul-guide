import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors: colors,
  text: {
    ...Platform.select({
      ios: {
        color: colors.darkGrey,
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        color: colors.darkGrey,
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
};
