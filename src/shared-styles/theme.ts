import { createTheme } from '@mui/material';

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: ['Lato', 'sans-serif'].join(','),
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: ['Lato', 'sans-serif'].join(','),
					fontStyle: 'italic',
					fontWeight: 300,
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontFamily: ['Inter', 'sans-serif'].join(','),
					color: theme.palette.text.primary,
					fontWeight: 700,
					fontSize: '1.25rem',
					lineHeight: '2rem',
				}),
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontFamily: ['Inter', 'sans-serif'].join(','),
					color: theme.palette.error.main,
					fontWeight: 300,
					fontSize: '1.25rem',
					lineHeight: '2rem',
				}),
			},
		},
	},
});

theme.palette.text.primary = '#000000';
theme.palette.text.secondary = '#FFFFFF';
theme.palette.error.main = '#FF0000';
theme.palette.success.main = '#19940E';
theme.palette.primary.main = '#071594';
theme.palette.secondary.main = '#35660E';
theme.palette.secondary.dark = '#40483A';

theme.breakpoints.values.xs = 390;
theme.breakpoints.values.sm = 768;
theme.breakpoints.values.md = 1024;
theme.breakpoints.values.lg = 1280;
theme.breakpoints.values.xl = 1920;

export const customThemeColors = {
	background: '#D9D9D9',
	backgroundImage: '#917878',
	backgroundImageShadow: '#362C2C63',
};
