import { View } from "react-native";
import Login from "./src/screens/login/login";
import Account from "./src/screens/account/account";
import Home from "./src/screens/home/home";
import Calendar from "./src/screens/calendar/calendar";
import Profile from "./src/screens/profile/profile";
import Main from "./src/screens/main/main";
import Services from "./src/screens/services/services.jsx";
import Schedule from "./src/screens/schedule/schedule.jsx";

export default function App() {
  return (
    <View style={{ flexGrow: 1 }}>
      <Schedule />
    </View>
  );
}
