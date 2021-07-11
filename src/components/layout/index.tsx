import React from "react";
import Footer from "@components/footer";
import Header from "@components/header";
import ScrollToTop from "@components/scrollToTop";
import { Box } from "@material-ui/core";

const Layout = (props: any) => {
	const { useLayout } = props;
	return useLayout ? (
		<Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
			<div>
				<Header />
				<main style={{ backgroundColor: "white" }}>
					{/* Necessary to scroll to top on page change */}
					<ScrollToTop />
					{props.children}
				</main>
			</div>
		</Box>
	) : (
		props.children
	);
};

export default Layout;
