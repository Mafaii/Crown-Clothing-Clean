import { Route, Routes } from "react-router-dom";

import Navigation from "./router/navigation/navigation.component";
import Home from "./router/home/home.component";
import Shop from "./router/shop/shop.component";
import SignInOut from "./router/sign-in-out/sign-in-out.component";

import Checkout from "./router/checkout/checkout.component";
import ContactPage from "./router/contact/contact.page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="cart" element={<Checkout />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="sign-in" element={<SignInOut />} />
      </Route>
    </Routes>
  );
}

export default App;
