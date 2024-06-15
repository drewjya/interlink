import { BlurView } from "expo-blur";
import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export type VModalParam = {
  children: React.ReactNode;
  active: boolean;
  onDismiss: () => void;
};
export const VModal = ({ children, active, onDismiss }: VModalParam) => {
  return (
    <View>
      <Modal
        onRequestClose={onDismiss}
        onDismiss={onDismiss}
        visible={active}
        animationType="fade"
        transparent={true}
        style={{
          flex: 1,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={onDismiss}>
          <BlurView
            //   experimentalBlurMethod="dimezisBlurView"
            intensity={1000}
            blurReductionFactor={10}
            style={styles.modalOverlay}
          />
        </TouchableWithoutFeedback>

        <View style={styles.modalContent}>
          {children}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",

    transform: [
      {
        translateY: Dimensions.get("window").width * 0.5,
      },
    ],
  },

  
  title: {
    fontSize: 16,
  },
  modalOverlay: {
    position: "absolute",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
