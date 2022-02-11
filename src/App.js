import "./App.css";
import { configureStore } from "./components/Redux/configureStore";
import Admin from "./components/adminComponent/admin";
import { Routes, Route } from "react-router-dom";
import PassangerList from "./components/common/PassangerList";
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import { Provider as ReduxProvider } from "react-redux";
import EditPassanger from "./components/editPassanger";
import AirlineStaff from "./components/AirlineStaff";
import StaffPassangerList from "./components/StaffPassangerList";
import StaffFlightList from "./components/StaffFlightList";

function App() {
  const store = configureStore();
  return (
    <ReduxProvider store={store}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/:flightId/managePassangers/"
            element={<PassangerList />}
          />
          <Route
            path="/admin/:flightId/managePassangers/:passangerId/edit"
            element={<EditPassanger />}
          />
          <Route path="/staff" element={<AirlineStaff />} />
          <Route
            path="/staff/:flightId/passangers"
            element={<StaffPassangerList />}
          />
        </Routes>
      </div>
    </ReduxProvider>
  );
}

export default App;
