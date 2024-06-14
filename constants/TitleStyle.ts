import { StyleProp, TextStyle } from "react-native";
import { Colors, fontSize } from "./Colors";

export const titleVal = (param: {
  title: string;
  headerTitleAlign?: "center" | "left";
}): {
  headerTitle: string;
  headerTitleAlign: "center" | "left" | undefined;
  headerShadowVisible: boolean;
  headerStyle: {
    backgroundColor: string;
  };
  statusBarColor: string;
  headerTitleStyle: StyleProp<
    Pick<TextStyle, "fontSize" | "fontWeight" | "fontFamily"> & {
      color?: string | undefined;
    }
  >;
} => {
  const { headerTitleAlign, title } = param;
  return {
    headerTitle: title,
    headerTitleAlign: headerTitleAlign,
    headerShadowVisible: false,
    headerStyle: { backgroundColor: Colors.primary },
    statusBarColor: Colors.primary,
    headerTitleStyle: {
      fontSize: fontSize.lg,
      color: Colors.darkSlate,
      fontFamily: "Lato_700Bold",
      fontWeight: "700",
    },
  };
};
