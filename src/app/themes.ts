"use client";

import localFont from "next/font/local";
import { Urbanist } from "next/font/google";
import { Theme, ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CommonColors } from "@mui/material/styles";

/* Fonts */
export const urbanist = Urbanist({
	subsets: ["latin"],
	display: "swap",
});

export const aeonik = localFont({
	src: [
		{
			path: "./fonts/AeonikProTRIAL-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/AeonikProTRIAL-Bold.otf",
			weight: "700",
			style: "bold",
		},
		{
			path: "./fonts/AeonikProTRIAL-Light.otf",
			weight: "300",
			style: "light",
		},
		{
			path: "./fonts/AeonikProTRIAL-RegularItalic.otf",
			weight: "400",
			style: "italic",
		},
	],
});

/* Colors */
export const sacramento: string = "rgba(10, 46, 51, 1)";
export const gogreen: string = "rgba(2, 199, 113, 1)";
export const gainsboro: string = "rgba(219, 226, 213, 1)";
export const gogreenlight: string = "rgba(2, 199, 113, 0.1)";
export const brown: string = "rgba(240, 160, 75, 1)";
export const lightbrown: string = "rgba(247, 184, 62, 1)";
export const error: string = "rgba(231, 95, 95, 1)";
export const white: string = "rgba(255, 255, 255, 1)";
export const black: string = "rgba(0, 0, 0, 1)";
export const lightgrey: string = "rgba(235, 238, 239, 0.4)";
export const grey: string = "rgba(232, 234, 234, 1)";
export const lightgreen: string = "rgba(224, 245, 236, 1)";

const themeOptions: ThemeOptions = {
	palette: {
		text: {
			primary: sacramento,
			secondary: gainsboro,
		},
		primary: {
			main: sacramento,
			light: brown,
			contrastText: white,
		},
		secondary: {
			main: gogreen,
			light: gogreenlight,
			contrastText: sacramento,
		},
		background: {
			default: white,
		},
		error: {
			main: error,
		},
		success: {
			main: gogreen,
		},
		common: {
			sacramento,
			gogreen: gogreen,
			gainsboro: gainsboro,
			gogreenlight,
			lightbrown,
			error,
			black,
			grey,
			lightgrey,
			brown,
			lightgreen,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "0.75rem",
					padding: "15px 30px",
					lineHeight: "1.35rem",
					letterSpacing: "0rem",
					fontSize: "1.125rem",
					fontWeight: 500,
					boxShadow: "none",
					textTransform: "none",
				},
				sizeLarge: {
					padding: "16px",
				},
				sizeMedium: {
					padding: "10px 15px",
				},
				sizeSmall: {
					padding: "8px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: "12px",
					boxShadow: "none",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: "6px",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					background: "white",
				},
				input: {
					padding: "0px",
				},
			},
		},
		MuiAccordion: {
			defaultProps: {
				square: false,
				disableGutters: true,
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					padding: "0px",
				},
			},
		},
		MuiSkeleton: {
			defaultProps: {
				animation: "wave",
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: "0px",
					margin: "0px",
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: "0px",
				},
			},
		},
		MuiTableCell: {
			defaultProps: {
				padding: "normal",
				align: "left",
			},
			styleOverrides: {
				root: {
					verticalAlign: "middle",
					padding: "8px",
					border: "none",
				},
			},
		},
		MuiFormHelperText: {
			defaultProps: {
				component: "div",
			},
			styleOverrides: {
				root: {
					marginLeft: "0px",
				},
			},
		},
		MuiStepper: {
			defaultProps: {
				component: "div",
			},
		},
		MuiTextField: {
			defaultProps: {
				fullWidth: true,
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					"&.Mui-checked": {
						color: gogreen,
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					verticalAlign: "middle",
				},
			},
		},
	},
	typography: {
		fontFamily: [urbanist.style.fontFamily, aeonik.style.fontFamily].join(","),
		h1: {
			fontSize: "4.375rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		h2: {
			fontSize: "3rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		h3: {
			fontSize: "2.25rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		h4: {
			fontSize: "1.5rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		h5: {
			fontSize: "1.25rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		h6: {
			fontSize: "1.125rem",
			fontFamily: aeonik.style.fontFamily,
			fontWeight: 600,
		},
		body1: {
			fontSize: "1.25rem",
		},
		body2: {
			fontSize: "1rem",
		},
		subtitle1: {
			fontSize: "0.875rem",
		},
		subtitle2: {
			fontSize: "0.75rem",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
};

let theme: Theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

export default theme;
