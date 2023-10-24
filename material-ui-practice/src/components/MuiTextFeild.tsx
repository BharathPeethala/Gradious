import React from "react";
import {
	Stack,
	TextField,
	InputAdornment,
	IconButton,
	MenuItem,
	Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function MuiTextFeild() {
	const [showPassword, setShowPassword] = React.useState(false);
	const [textValue, setTextValue] = React.useState("");
	const [coutries, setCountries] = React.useState<string[]>([]);
	const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		console.log(value)
		setCountries(typeof value === "string" ? value.split(",") : value);
	};
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	return (
		<Box>
			<Stack direction={"row"}>
				<TextField label="Name" size="small" required variant="filled" />
				<TextField
					label="username"
					size="small"
					// InputProps={{ readOnly: true }}
					onChange={(e) => {
						setTextValue(e.target.value);
					}}
					error={textValue.length === 0}
					helperText="helper text"
				/>
				<TextField
					label="Password"
					type={showPassword ? "password" : "text"}
					required
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={handleClickShowPassword}>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<TextField
					label="Amount"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>
				<TextField
					label="weight"
					InputProps={{
						startAdornment: <InputAdornment position="end">kg</InputAdornment>,
					}}
				/>
			</Stack>
			<Stack>
				<TextField
					select
					label="Select a country"
					sx={{ width: "300px" }}
					value={coutries}
					SelectProps={{
						multiple: true,
					}}
					onChange={handleSelect}
				>
					<MenuItem value="IN">India</MenuItem>
					<MenuItem value="US">US</MenuItem>
					<MenuItem value="UK">UK</MenuItem>
				</TextField>
			</Stack>
		</Box>
	);
}

export default MuiTextFeild;
