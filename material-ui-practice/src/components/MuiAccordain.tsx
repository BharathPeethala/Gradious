import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function MuiAccordain() {
	return (
		<Box>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon/>}>Accordion 1</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia at
					voluptatum architecto et velit, provident ipsum doloremque. Incidunt
					corrupti voluptatibus obcaecati est eum porro exercitationem. Ut aut
					inventore iusto labore!
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default MuiAccordain;
