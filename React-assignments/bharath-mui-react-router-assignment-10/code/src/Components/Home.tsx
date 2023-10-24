import { Container, Grid } from "@mui/material";
import React from "react";
import data from "../DB/data.json";
import Cards from "./Cards";
function Home() {
	return (
		<Container sx={{marginTop:'130px',marginBottom:'20px'}}>
			<Grid container direction={"row"} spacing={5} justifyContent={'space-evenly'}>
				{data.map((d) => {
					return <Grid item sx={{padding:'3rem 0rem'}}>
            <Cards data={d} />
          </Grid>;
				})}
			</Grid>
		</Container>
	);
}

export default Home;
