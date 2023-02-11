const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,tsx,jsx}'],
	theme: {
		extend: {
			colors: {
				...colors,
				primary: '#01AD95',
				secondary: '#016153',
			},
		},
	},
	plugins: [],
};
