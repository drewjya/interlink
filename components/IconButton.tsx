import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const IconButton = (props: {
  onClick?: () => void;
  children?: React.ReactNode;
}) => {
  const { onClick, children } = props;
  return (
    <Pressable
      onPress={onClick}
      style={styles.iconButton}
      android_ripple={{
        radius: 20,
        borderless: true,
      }}
    >
      {children}
    </Pressable>
  );
};

export const IconButtonWithLabel = (props: {
  onClick?: () => void;
  children?: (state: boolean) => React.ReactNode | React.ReactNode;
  label?: string;
}) => {
  const { onClick, children, label } = props;
  return (
    <View style={styles.buttonView}>
      <Pressable
        onPress={onClick}
        android_ripple={{
          color: Colors.slate,
          borderless: true,
        }}
      >
        {({ pressed }) => (
          <View style={styles.item}>
            {children ? children(pressed) : undefined}
            <Text
              style={{
                color: "black",
                fontWeight: "600",
              }}
            >
              {label}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    alignSelf: "stretch",
    justifyContent: "center",

    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Colors.primary,
  },
  item: {
    width: "auto",
    padding: 10,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    columnGap: 5,
  },
  iconButton: {
    borderRadius: 100,

    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
