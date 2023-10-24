import { ImageList, ImageListItem, Box, Typography } from "@mui/material";
import itemData from "../DB/images.json";
interface itemType {
	path: string;
}

function Images() {
	return (
		<Box sx={{ margin: "90px 20px 5px 20px", padding: "1rem" }} bgcolor={"white"}>
			<Typography variant="h4" component="h4" textAlign="center" gutterBottom fontWeight={'bold'} letterSpacing={'20px'}>
				GALLERY
			</Typography>
			<ImageList sx={{ width: "100%", height: 480 }} cols={2} rowHeight={500}>
				{itemData.map((item: itemType, index) => {
					console.log(item);
					return (
						<ImageListItem key={index} sx={{ padding: "5px" ,margin:'10px'}}>
							<img src={`${item?.path}`} alt={index + ""} loading="lazy" />
						</ImageListItem>
					);
				})}
			</ImageList>
		</Box>
	);
}

export default Images;
