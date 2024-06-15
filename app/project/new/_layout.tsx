import { DatePicker } from "@/components/DatePicker";
import { IconButtonWithLabel } from "@/components/IconButton";
import { Colors, screenPadding } from "@/constants/Colors";
import { screenStyle } from "@/constants/Style";
import { MaterialIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ChangedDate } from "react-native-calendar-picker";
import { Iconify } from "react-native-iconify";

const TextForm = ({
  label,
  placeHolder,
  onChangeText,
  children,
  left: right,
}: {
  label: string;
  placeHolder: string;
  children?: React.ReactNode;
  left?: React.ReactNode;
  onChangeText?: (text: string) => void;
}) => {
  return (
    <View style={{ rowGap: 2 }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{label}</Text>
      {children ? (
        children
      ) : right ? (
        <View style={{ flexDirection: "row", columnGap: 5, flex: 1 }}>
          <TextInput
            placeholder={placeHolder}
            style={{
              borderColor: Colors.slate,
              borderWidth: 1,
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              backgroundColor: Colors.background,
            }}
            onChangeText={onChangeText}
          />
          {right}
        </View>
      ) : (
        <TextInput
          placeholder={placeHolder}
          style={{
            borderColor: Colors.slate,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
            backgroundColor: Colors.background,
          }}
          onChangeText={onChangeText}
        />
      )}
    </View>
  );
};

const formatDate = ({ date, format }: { date: Date; format: string }) => {
  return dayjs(date).format(format);
};

export default function TabProjects() {
  const [form, setForm] = useState<{
    name: string;
    startDate?: Date;
    endDate?: Date;
  }>({
    name: "",
    startDate: undefined,
    endDate: undefined,
  });
  const setName = (v: string) => {
    setForm({
      ...form,
      name: v,
    });
  };

  const setDate = (date: Date, type: ChangedDate) => {
    console.log(type);

    if (type === "START_DATE") {
      setForm({
        name: form.name,
        endDate: undefined,
        startDate: undefined,
      });
      setTimeout(() => {
        setForm({
          name: form.name,
          endDate: undefined,
          startDate: date,
        });
      }, 100);
    } else {
      setForm({
        ...form,
        endDate: date,
      });
    }
  };

  const [active, setActive] = useState(false);

  return (
    <ScrollView style={screenStyle.container}>
      <View
        style={{
          rowGap: 8,
          paddingBottom: 12,
          paddingHorizontal: screenPadding.horizontal,
        }}
      >
        <DatePicker
          onDismiss={() => {
            setActive(false);
          }}
          setDate={setDate}
          active={active}
          startDate={form.startDate}
          endDate={form.endDate}
        />
        <TextForm
          label="Name"
          placeHolder="Project Name"
          onChangeText={setName}
        />

        <TextForm label="Range" placeHolder="Project Range">
          <View
            style={{ overflow: "hidden", backgroundColor: Colors.background }}
          >
            <Pressable
              onPress={() => setActive(true)}
              android_ripple={{
                borderless: true,
              }}
              style={{
                overflow: "hidden",
                borderColor: Colors.slate,
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: Colors.background,
              }}
            >
              {form.startDate && form.endDate ? (
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 4,
                    alignItems: "center",
                  }}
                >
                  <Text>
                    {formatDate({
                      date: form.startDate,
                      format: "DD MMM YYYY",
                    })}
                  </Text>
                  <Iconify
                    icon="material-symbols:arrow-right-alt-rounded"
                    size={20}
                    color={"black"}
                  />
                  <Text>
                    {formatDate({
                      date: form.endDate,
                      format: "DD MMM YYYY",
                    })}
                  </Text>
                </View>
              ) : (
                <Text>Select Range</Text>
              )}
            </Pressable>
          </View>
        </TextForm>

        <TextForm
          label="Member"
          placeHolder="Search For Member"
          onChangeText={() => {}}
          left={
            <IconButtonWithLabel label="Add">
              {(pressed) => (
                <MaterialIcons name="add" color={"black"} size={20} />
              )}
            </IconButtonWithLabel>
          }
        ></TextForm>
        
      </View>
    </ScrollView>
  );
}
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

  modalItem: {
    height: "auto",
    transform: [{ scale: 0.9 }],

    borderRadius: 10,

    width: "100%",
    backgroundColor: Colors.primary,
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
