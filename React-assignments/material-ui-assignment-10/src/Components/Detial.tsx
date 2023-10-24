import { Box, Paper, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import data from "../DB/data.json";
function Detial() {
	const params = useParams();
	const id: string | undefined = params.id;
	let displayData;
	if (id !== undefined) {
		displayData = data[Number.parseInt(id) - 1];
	}
	return (
		<Paper
			sx={{
				margin: "90px 3rem",
				borderRadius: "0",
				padding: "3rem",
			}}
			elevation={0}
		>
			<Typography
				variant="h4"
				component="h3"
				fontWeight={"900"}
				// padding={"1rem 1rem"}
				textAlign={"center"}
			>
				{displayData?.name}
			</Typography>
			<Box>
				<Box
					sx={{
						float: "left",
						padding: "1rem",
						textAlign: "center",
						maxWidth: "200px",
						// minHeight:'500px'
					}}
				>
					<Link to="/">
						<img
							src={displayData?.profile_pic}
							alt="image of character"
							width={"100%"}
							height={"auto"}
						/>
					</Link>
				</Box>
				<Box
					sx={{
						textAlign: "justify",
						wordSpacing: "7px",
					}}
				>
					<Typography variant="body2" component="h6" lineHeight={"25px"}>
						{displayData?.full_details}
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
}

export default Detial;
