import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import seasons from "../DB/seasons.json";
import { Link } from "react-router-dom";
type season = {
	path: string;
};
function Seasons() {
	return (
		<Paper sx={{ margin: "130px 1rem 1rem 1rem" }}>
			<Grid container justifyContent={"space-around"} spacing={5}>
				{seasons.map((season: season, index) => {
					return (
						<Grid item>
							<Box
								maxWidth={"350px"}
								maxHeight={"500px"}
								padding={"1rem"}
								margin={"1rem"}
								border={"2px solid black"}
								bgcolor={"black"}
								color={"white"}
							>
								<a href="https://www.hotstar.com/in/shows/game-of-thrones/8184" target="_blank">
									<img src={season.path} width={"100%"} height={"300px"} />
								</a>
								<Typography
									component="h6"
									variant="h6"
									fontWeight={"bold"}
									textAlign={"center"}
								>
									Season {index + 1}
								</Typography>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
}

export default Seasons;
