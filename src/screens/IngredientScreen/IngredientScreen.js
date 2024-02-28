import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { colors, commonStyles, fonts } from "../../themes";

const IngredientScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={fonts.boldFont}></Text>
      <Button
        onPress={() => {
          navigation.navigate("ScanScreen");
        }}
        title="Scan"
        color={colors.primaryColor}
      ></Button>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.backgroundColor,
  },
  welcome_text: { ...fonts.boldFont, fontSize: 18 },
});

export default IngredientScreen;
