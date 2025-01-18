

// Import router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import EstimateCost from "./Pages/EstimateCost";
import RequestQuotation from "./Pages/RequestQuotation";
import ContactUs from "./Pages/ContactUs";
import MaterialOptions from "./Pages/MaterialOptions";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/estimate/cost" Component={EstimateCost}></Route>
          <Route path="/materials" Component={MaterialOptions}></Route>
          <Route path="/request/quotation" Component={RequestQuotation}></Route>
          <Route path="/contact/us" Component={ContactUs}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
