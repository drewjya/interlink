import CalendarPicker, {
  ChangedDate,
  DateParsable,
} from "react-native-calendar-picker";

import { Colors } from "@/constants/Colors";
import { Button, StyleSheet, View } from "react-native";
import { VModal } from "./VModal";

type DatePickerParam = {
  startDate?: DateParsable;
  endDate?: DateParsable;
  onDismiss: () => void;
  setDate: (date: Date, type: ChangedDate) => void;
  active: boolean;
};

export const DatePicker = ({
  onDismiss,
  setDate,
  endDate,
  startDate,
  active,
}: DatePickerParam) => {
  return (
    <View>
      <VModal onDismiss={onDismiss} active={active}>
        <View style={style.modalItem}>
          <CalendarPicker
            selectedDayColor={Colors.slate}
            onDateChange={setDate}
            allowRangeSelection={true}
            selectedStartDate={startDate}
            selectedEndDate={endDate}
            minDate={new Date()}
          ></CalendarPicker>
          <Button title="Close" onPress={onDismiss} />
        </View>
      </VModal>
    </View>
  );
};

const style = StyleSheet.create({
  modalItem: {
    height: "auto",
    transform: [{ scale: 0.9 }],

    borderRadius: 10,

    width: "100%",
    backgroundColor: Colors.primary,
  },
});
