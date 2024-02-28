// A centralized entry point for all screens, simplifying imports.
import HomeScreen from "./HomeScreen";
import ScanScreen from "./ScanScreen";
import IngredientScreen from "./IngredientScreen";

const Screens = {
  // central export makes it easier to import multiple Screens from other parts of your application using a single import statement.
  HomeScreen,
  ScanScreen,
  IngredientScreen,
};

export default Screens;
