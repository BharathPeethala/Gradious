import {
	Paper,
	Box,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Typography,
    Button,
} from "@mui/material";
import React from "react";

function MuiCards() {
	return (
		<Box display={"flex"}>
			<Box padding={3} margin={1}>
				<Card>
					<CardMedia
						component="img"
						src="https://source.unsplash.com/random"
						height={"200px"}
					/>
					<CardContent>
						<Typography variant="h6">Bharath</Typography>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus veniam dolor ad fuga ipsa. Ex qui, ab animi provident
							magni impedit maiores, odio, ducimus aliquam quasi aliquid iure
							officia placeat?
						</Typography>
					</CardContent>
					<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Button>Share</Button>
						<Button>View</Button>
					</CardActions>
				</Card>
			</Box>
			<Box padding={3} margin={1}>
				<Card>
					<CardMedia
						component="img"
						src="https://source.unsplash.com/random"
						height={"200px"}
					/>
					<CardContent>
						<Typography variant="h6">Bharath</Typography>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus veniam dolor ad fuga ipsa. Ex qui, ab animi provident
							magni impedit maiores, odio, ducimus aliquam quasi aliquid iure
							officia placeat?
						</Typography>
					</CardContent>
					<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Button>Share</Button>
						<Button>View</Button>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
}

export default MuiCards;
