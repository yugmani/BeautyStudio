import React from 'react';
// import Header from "./Components/Header";
// import Amenities from "./Components/Amenities";
// import Testimonials from "./Components/Testimonials";
// import Contact from './Components/Contact';
// import Footer from "./Components/Footer";

// import CustomerList from "./Components/CustomerList";
// import EditCustomer from "./Components/EditCustomer";
// import CreateCustomer from "./Components/CreateCustomer";

import {
    BrowserRouter as Router,
    Route 
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      {/* <Router > */}
      <Header />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
        
            {/* <Route path="/list" exact component = {CustomerList} />
            <Route path="/edit:id" exact component = {EditCustomer} />
            <Route path="/create" exact component = {CreateCustomer} />
       
        </Router> */}
    </div>
  );
}

export default App;

