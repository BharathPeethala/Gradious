import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	Hidden,
	IconButton,
	Stack,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
	const Links = ["home", "about", "images", "seasons"];
	const [menuOpen, setMenuOpen] = React.useState(false);
	const toggleDrawer =
		(anchor: string, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setMenuOpen(open);
		};

	return (
		<AppBar
			position="fixed"
			// color="transparent"
			elevation={0}
			sx={{
				backgroundColor: "white",
				borderBottom: "0.1px solid #EEEEEE",
				left: "0",
				right: "0",
				width: "100%",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<IconButton
							size="large"
							edge="start"
							aria-label="logo"
							disableRipple
						>
							<Link to="/">
								<img src="/assets/images/logo.png" alt="logo" width="100px" />
							</Link>
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
						<Stack
							direction={"row"}
							alignItems={"flex-end"}
							width={"100%"}
							spacing={4}
						>
							{Links.map((link) => {
								return (
									<Button
										color="inherit"
										sx={{ fontWeight: "bold", fontSize: "1rem" }}
									>
										<Link to={`/${link}`}>{link}</Link>
									</Button>
								);
							})}
						</Stack>
					</Box>
					<Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
						<IconButton onClick={toggleDrawer("right", true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="right"
							open={menuOpen}
							onClose={toggleDrawer("right", false)}
							// onOpen={toggleDrawer("right", true)}
						>
							<Stack
								direction={"column"}
								alignItems={"flex-end"}
								// justifyContent={"space-around"}
								width={"100%"}
								height={"100%"}
								spacing={4}
								sx={{ backgroundColor: "black", color: "white" }}
							>
								<IconButton onClick={() => setMenuOpen(false)} sx={{color:'white',padding:'1rem'}}>
									<CloseIcon />
								</IconButton>
								{Links.map((link) => {
									return (
										<Button
											color="inherit"
											sx={{
												fontWeight: "bold",
												fontSize: "1rem",
												padding: "1.5rem 3rem",
											}}
											onClick={() => {
												setMenuOpen(false);
											}}
										>
											<Link to={`/${link}`}>
												<Typography color={"white"}>{link}</Typography>
											</Link>
										</Button>
									);
								})}
							</Stack>
						</Drawer>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar;
