import HomePage from "./containers/home";
import CourseDetailsPage from "./containers/courseDetails";
import SignUpPage from "./containers/auth/signUp";
import LoginPage from "./containers/auth/login";
import ServicesPage from "./containers/services";
import ForgotPasswordPage from "./containers/auth/forgotPassword";
import ResetPasswordPage from "./containers/auth/resetPassword";
import UserSettingsPage from "./containers/userSettings";
import SchedulerPage from "./containers/scheduler";
import ClassesPage from "./containers/allclasses";
import BatchPage from "./containers/allbatches";
import Cart from "./containers/Cart";
import Checkout from "./containers/checkout/index";
import GuestCheckout from "./containers/checkout/GuestCheckout";
import FinalPayment from "./containers/finalPayment";
import SuccessPay from "./containers/finalPayment/SuccessPay";
import GuestDetail from "./containers/checkout/GuestDetail";
import BusinessSignup from "./containers/auth/businessSignup";
import Signupstep2 from "./containers/auth/Signupstep2";
import Signupstep1 from "./containers/auth/Signupstep1";
import BusinessLogin from "./containers/auth/businessLogin";

interface routeConfig {
	path: string;
	exact: boolean;
	component: any;
	// Set this to true if the page requires a header and footer
	useLayout: boolean;
}

const routes: routeConfig[] = [
	{
		path: "/services",
		exact: false,
		component: <ServicesPage />,
		useLayout: true,
	},
	{
		path: "/courseDetails",
		exact: false,
		component: <CourseDetailsPage />,
		useLayout: true,
	},
	{
		path: "/cart",
		exact: false,
		component: <Checkout />,
		useLayout: true,
	},
	{
		path: "/payment",
		exact: false,
		component: <FinalPayment />,
		useLayout: true,
	},
	{
		path: "/success",
		exact: false,
		component: <SuccessPay />,
		useLayout: true,
	},
	{
		path: "/checkout",
		exact: false,
		component: <Checkout />,
		useLayout: true,
	},
	{
		path: "/guest",
		exact: false,
		component: <GuestCheckout />,
		useLayout: true,
	},
	{
		path: "/signUp",
		exact: false,
		component: <SignUpPage />,
		useLayout: false,
	},
	{
		path: "/login",
		exact: false,
		component: <LoginPage />,
		useLayout: false,
	},
	{
		path: "/businessSignup",
		exact: false,
		component: <BusinessSignup />,
		useLayout: false,
	},
	{
		path: "/step1",
		exact: false,
		component: <Signupstep1 />,
		useLayout: false,
	},
	{
		path: "/step2",
		exact: false,
		component: <Signupstep2 />,
		useLayout: false,
	},
	{
		path: "/businessLogin",
		exact: false,
		component: <BusinessLogin />,
		useLayout: false,
	},
	{
		path: "/forgotPassword",
		exact: false,
		component: <ForgotPasswordPage />,
		useLayout: false,
	},
	{
		path: "/resetPassword",
		exact: false,
		component: <ResetPasswordPage />,
		useLayout: false,
	},

	{
		path: "/userSettings",
		exact: false,
		component: <UserSettingsPage />,
		useLayout: true,
	},
	{
		path: "/scheduler",
		exact: true,
		component: <SchedulerPage />,
		useLayout: true,
	},
	{
		path: "/classes",
		exact: true,
		component: <ClassesPage />,
		useLayout: true,
	},
	{
		path: "/batches",
		exact: true,
		component: <BatchPage />,
		useLayout: true,
	},
	{
		path: "/",
		exact: true,
		component: <HomePage />,
		useLayout: true,
	},

	{
		path: "/guest-checkout",
		exact: true,
		component: <GuestDetail />,
		useLayout: true,
	},

	// !ALERT: Do not add new routes here. Add it before this item
];

export default routes;
