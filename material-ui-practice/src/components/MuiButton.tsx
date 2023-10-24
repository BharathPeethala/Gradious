import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function MuiButton() {
	return (
		<Stack spacing={2}>
			<Stack spacing={4} direction={"row"}>
				<Button>Button</Button>
				<Button
					variant="contained"
					color="primary"
					disableFocusRipple
					disableTouchRipple
					disableElevation
				>
					Button
				</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={(event) => alert("button clicked")}
					startIcon={<SendIcon />}
				>
					Button
				</Button>
				<IconButton>
					<SendIcon color="success" />
				</IconButton>
			</Stack>
			<Stack spacing={4} direction={"row"}>
				<ButtonGroup variant="contained" orientation="vertical" color="error">
					<Button>Left</Button>
					<Button>right</Button>
					<Button>center</Button>
				</ButtonGroup>
			</Stack>
			<Stack spacing={4} direction={"row"}>
			</Stack>
		</Stack>
	);
}

export default MuiButton;
