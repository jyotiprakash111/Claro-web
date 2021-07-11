import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/css/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AuthProvider from "@contexts/Auth";
import routes from "./routes";
import Layout from "@components/layout";
import './index.css'


import partner from "./Partner/pages/customers/index";
import partnerSingle from "./Partner/pages/singleCustomers/index";
import testimonial from "./Partner/pages/testimonial/index";
import general from "./Partner/pages/general/index";
import schedule from "./Partner/pages/schedule/index";
import sales from "./Partner/pages/sales";
import team from "./Partner/pages/team/index";
import notification from "./Partner/pages/notification/index";
import profile from "./Partner/pages/profile/index";
import location from "./Partner/pages/location/index";
import payment from "./Partner/pages/payment";
import settings from "./Partner/pages/setting/index";
import batchSchedule from "./Partner/pages/batchSchedule/index";
import home from "./Partner/pages/home/index";
import home_services from "./Partner/pages/home/services";
import home_classes from "./Partner/pages/home/services/classes";
import homeScreen from "./Partner/pages/homePage/index";
import onlineBooking from "./Partner/pages/onlineBooking/index";
import NewClass from "./Partner/pages/home/services/addNewClass/index";
import NewSchedule from "./Partner/pages/newClassSchedule";
import NewUpdateSchedule from "./Partner/pages/newSchedule/index";
import NewUpdatePricing from "./Partner/pages/newUpdatePricing";
import NewScheduleStatus from "./Partner/pages/scheduleStatus/index";
import Home from "./containers/home/index";


const queryClient = new QueryClient();

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					{/* CssBaseline overrides browser defaults and sets other values to workable ones*/}
					<CssBaseline />
					<Router>
						<AuthProvider>
							<Switch>
									<Route exact path="/Partner" component={home} />
						<Route path="/homescreen" component={homeScreen} />
						<Route path="/home_services" component={home_services} />
						<Route path="/home_classes" component={home_classes} />
						<Route path="/customer" component={partner} />
						<Route path="/partner_home" component={partnerSingle} />
						<Route path="/testimonial" component={testimonial} />
						<Route path="/general" component={general} />
						<Route path="/schedule" component={schedule} />
						<Route path="/sales" component={sales} />
						<Route path="/team" component={team} />
						<Route path="/notification" component={notification} />
						<Route path="/profile" component={profile} />
						<Route path="/location" component={location} />
						<Route path="/payment" component={payment} />
						<Route path="/settings" component={settings} />
						<Route path="/batch_schedule" component={batchSchedule} />
						<Route path="/online_booking" component={onlineBooking} />
						<Route path="/new_class" component={NewClass} />
						<Route path="/new_class_schedule" component={NewSchedule} />
						{/* New Work */}
						<Route path="/new_schedule" component={NewUpdateSchedule} />
						<Route path="/new_pricing" component={NewUpdatePricing} />
						<Route path="/new_schedule_status" component={NewScheduleStatus} />
						<Route path="/home" component={Home} />
								{routes.map((route: any) => (
									<Route path={route.path} exact={Boolean(route.exact)}  >
										<Layout useLayout={route.useLayout}>
											{route.component}
										</Layout>
									</Route>
								))}
								<Redirect to="/" />
							</Switch>
						</AuthProvider>
					</Router>
				</QueryClientProvider>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
