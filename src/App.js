import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Splash from "./pages/Splash";
import PaymentDescription from "./pages/PaymentDescription";
import AccountDetails from "./pages/AccountDetails";
import PrivacyandPolicy from "./pages/PrivacyandPolicy";
import Settings from "./pages/Settings";
import TermsAndConditions from "./pages/TermsAndConditions";
import Confirmation from "./pages/Confirmation";
import TransferRequest from "./pages/TransferRequest";
import History1 from "./pages/History1";
import Profile from "./pages/Profile";
import MinePage from "./pages/MinePage";
import SendMoney from "./pages/SendMoney";
import TrackTransfer from "./pages/TrackTransfer";
import LetsYouIn from "./pages/LetsYouIn";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Notification1 from "./pages/Notification1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/payment-description":
        title = "";
        metaDescription = "";
        break;
      case "/account-details":
        title = "";
        metaDescription = "";
        break;
      case "/privacyandpolicy":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/termsandconditions":
        title = "";
        metaDescription = "";
        break;
      case "/confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/transfer-request":
        title = "";
        metaDescription = "";
        break;
      case "/history":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/mine-page":
        title = "";
        metaDescription = "";
        break;
      case "/send-money":
        title = "";
        metaDescription = "";
        break;
      case "/tracktransfer":
        title = "";
        metaDescription = "";
        break;
      case "/lets-you-in":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/verify-email":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/payment-description" element={<PaymentDescription />} />
      <Route path="/account-details" element={<AccountDetails />} />
      <Route path="/privacyandpolicy" element={<PrivacyandPolicy />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/transfer-request" element={<TransferRequest />} />
      <Route path="/history" element={<History1 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mine-page" element={<MinePage />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/tracktransfer" element={<TrackTransfer />} />
      <Route path="/lets-you-in" element={<LetsYouIn />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/notification" element={<Notification1 />} />
    </Routes>
  );
}
export default App;
