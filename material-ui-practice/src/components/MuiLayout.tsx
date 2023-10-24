import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
// import React from 'react'

function MuiLayout() {
	return (
		<Paper>
			<Box>
				<Stack
					direction={"row"}
					spacing={4}
					divider={<Divider orientation="vertical" flexItem />}
				>
					<Box
						width={"300px"}
						height={"300px"}
						sx={{
							backgroundColor: "blue",
							color: "white",
							"&:hover": {
								color: "red",
							},
						}}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						Hi this is Bharath
					</Box>
					<Box
						width={"300px"}
						height={"300px"}
						sx={{
							backgroundColor: "green",
							color: "white",
							"&:hover": {
								color: "red",
							},
						}}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						Hi this is Bharath
					</Box>
				</Stack>
				<Stack p={1} direction={"row"}>
					<Grid rowSpacing={2} columnSpacing={1} container my={4}>
						<Grid item xs={6}>
							<Box p={2} bgcolor="primary.light">
								Item 1
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box p={2} bgcolor="primary.light">
								Item 2
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box p={2} bgcolor="primary.light">
								Item 3
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box p={2} bgcolor="primary.light">
								Item 4
							</Box>
						</Grid>
					</Grid>
				</Stack>
			</Box>
		</Paper>
	);
}

export default MuiLayout;
