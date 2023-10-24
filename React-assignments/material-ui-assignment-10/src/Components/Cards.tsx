import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from "@mui/material";
import { CardProps } from "../Types/CardProps.type";
import { Link } from "react-router-dom";
function Cards({ data: { id, name, profile_pic, description } }: CardProps) {
	return (
		<Link to={`/card/${id}`}>
			<Card
				sx={{
					maxWidth: 350,
					transition: "all .5s ease-in-out",
					"&:hover": { transform: "scale(1.1)" },
				}}
			>
				<CardMedia
					sx={{ height: 500 }}
					image={profile_pic}
					title="green iguana"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						textAlign={"center"}
						fontWeight={"bold"}
					>
						{name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						textAlign={"justify"}
					>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						<Typography fontWeight={"bold"}>Learn more</Typography>
					</Button>
				</CardActions>
			</Card>
		</Link>
	);
}

export default Cards;
