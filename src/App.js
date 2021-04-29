import "./App.css";
import AddService from "./components/AdminArea/AddService/AddService";
import HomeMain from "./components/Home/Main/HomeMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "./components/AdminArea/OrderList/OrderList";
import MakeAdmin from "./components/AdminArea/MakeAdmin/MakeAdmin";
import ManageService from "./components/AdminArea/ManageService/ManageService";
import AdminProfile from "./components/AdminArea/AdminProfile/AdminProfile";
import AdminNavBar from "./components/AdminArea/AdminNavBar/AdminNavBar";
import CustomerNav from "./components/Customer/CustomerNav/CustomerNav";
import BookAService from "./components/Customer/Book/BookAService";
import BookingList from "./components/Customer/BookingList/BookingList";
import Review from "./components/Customer/Review/Review";
import Login from "./components/globalComponent/FireBase/Login/Login";
import { AppContext } from "./components/globalComponent/Contex/Provider";
import { useState } from "react";
import PrivateRoute from "./components/globalComponent/PrivateRoute/PrivateRoute";
import NavBar from "./components/Home/NavBar/NavBar";
import CheckoutForm from "./components/Customer/Stripe/CheckOut";

function App() {
  const [loggedInUser, setloggedInUser] = useState({
    name: "",
    email: "",
    verified: "",
    image: "",
    isLoggedIn: false,
  });

  const [newService, setNewServices] = useState();
  const [AdminStatus, setAdminStatus] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(false);

  return (
    <AppContext.Provider
      value={[
        loggedInUser,
        setloggedInUser,
        newService,
        setNewServices,
        AdminStatus,
        setAdminStatus,
        paymentStatus,
        setPaymentStatus,
      ]}
    >
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <NavBar></NavBar>
                <HomeMain></HomeMain>
              </Route>
              <Route path="/login">
                <NavBar></NavBar>
                <Login></Login>
              </Route>
              {/* shows Dashboard based on user role */}
              <PrivateRoute path="/dash-board">
                {AdminStatus ? (
                  <>
                    {" "}
                    <AdminNavBar></AdminNavBar>
                    <OrderList></OrderList>
                  </>
                ) : (
                  <>
                    {" "}
                    <CustomerNav></CustomerNav>
                    <BookAService></BookAService>{" "}
                  </>
                )}
              </PrivateRoute>
              {/* all the admin and customer routings from here */}
              {AdminStatus ? (
                <>
                  <PrivateRoute path="/orders">
                    <AdminNavBar></AdminNavBar>
                    <OrderList />
                  </PrivateRoute>
                  <PrivateRoute path="/pagerole">
                    <AdminNavBar></AdminNavBar>
                    <MakeAdmin />
                  </PrivateRoute>
                  <PrivateRoute path="/addservice">
                    <AdminNavBar></AdminNavBar>
                    <AddService />
                  </PrivateRoute>
                  <PrivateRoute path="/manageservice">
                    <AdminNavBar></AdminNavBar>
                    <ManageService />
                  </PrivateRoute>
                  <PrivateRoute path="/sudoprofile">
                    <AdminNavBar></AdminNavBar>
                    <AdminProfile></AdminProfile>
                  </PrivateRoute>
                </>
              ) : (
                <>
                  <PrivateRoute path="/book">
                    <CustomerNav></CustomerNav>
                    <BookAService></BookAService>
                  </PrivateRoute>
                  <PrivateRoute path="/pay">
                    <CustomerNav></CustomerNav>
                    <CheckoutForm></CheckoutForm>
                  </PrivateRoute>
                  <PrivateRoute path="/booking-list">
                    <CustomerNav></CustomerNav>
                    <BookingList></BookingList>
                  </PrivateRoute>
                  <PrivateRoute path="/review">
                    <CustomerNav></CustomerNav>
                    <Review></Review>
                  </PrivateRoute>
                </>
              )}
            </Switch>
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
