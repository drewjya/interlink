import { StyleSheet } from "react-native";
import { Colors, fontSize, screenPadding } from "./Colors";

export const defaultStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  text: {
    fontSize: fontSize.base,
    color: Colors.text,
  },
});

export const utilsStyles = StyleSheet.create({});

export const screenStyle = StyleSheet.create({
  container: {
    flex: 1,

    maxHeight: "auto",
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingBottom: 100,
  },

  titleStyle: {
    fontSize: fontSize.base,
    fontWeight: "700",
    
    fontFamily: "Lato_700Bold",
    paddingVertical: 12,
    color: Colors.darkSlate,
  },
});
