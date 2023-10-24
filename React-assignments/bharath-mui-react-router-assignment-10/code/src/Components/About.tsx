import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
		<Paper
			sx={{
				margin: "90px 1rem 1rem 1rem",
				textAlign: "center",
				borderRadius: "0",
				padding: "3rem",
			}}
			elevation={0}
		>
			<Typography
				variant="h3"
				component="h3"
				textAlign="center"
				gutterBottom
				fontWeight={"bold"}
				letterSpacing={"20px"}
			>
				ABOUT
			</Typography>
			<Divider orientation="horizontal" />
			<Typography
				variant="body1"
				component="h6"
				textAlign="justify"
				lineHeight="40px"
			>
				Game of Thrones is an epic fantasy television series that premiered on
				HBO in 2011 and ran for eight seasons, based on the A Song of Ice and
				Fire book series by George R.R. Martin. Set in the fictional world of
				Westeros, the story revolves around several noble families vying for
				control of the Iron Throne and the Seven Kingdoms of Westeros, while
				supernatural forces and political intrigue threaten to destabilize the
				realm. The show features a large ensemble cast, including Sean Bean, Kit
				Harington, Emilia Clarke, Peter Dinklage, Lena Headey, Sophie Turner,
				Maisie Williams, and many others. Over the course of its run, the show
				became known for its complex characters, shocking twists, and brutal
				violence. It also broke records for its production values and its
				popularity, becoming one of the most-watched television shows in
				history. However, the final season was controversial among fans and
				critics, with some criticizing the writing and pacing of the storyline.
				Despite its flaws, Game of Thrones remains a cultural phenomenon that
				has left a lasting impact on the entertainment industry and the wider
				popular culture.
			</Typography>
		</Paper>
	);
}

export default About