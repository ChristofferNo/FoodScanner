// A centralized entry point for all screens, simplifying imports.
import HomePage from "./HomePage";
import ScanPage from "./ScanPage";

const Screens = {
  // central export makes it easier to import multiple Screens from other parts of your application using a single import statement.
  HomePage,
  ScanPage,
};

export default Screens;
