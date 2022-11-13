/** @type {import('tailwindcss').Config} */ module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: 'hsl(26,100%,55%)',
				paleOrange: 'hsl(25, 100%, 94%)',
				veryDarkBlue: 'hsl(219, 9%, 45%)',
				darkGrayishBlue: 'hsl(220, 14%, 75%)',
				lightGrayishBlue: 'hsl(223, 64%, 98%)',
				white: 'hsl(0,0%,100%)',
				black: 'hsl(0, 0% 0%)',
			},
			fontSize: {
				'xs': 'clamp(0.83rem, calc(0.80rem + 0.16vw), 0.95rem)',
				'base': 'clamp(1.00rem, calc(0.95rem + 0.25vw), 1.19rem)',
				'lg': 'clamp(1.20rem, calc(1.12rem + 0.39vw), 1.48rem)',
				'xl': 'clamp(1.44rem, calc(1.33rem + 0.56vw), 1.86rem)',
				'2xl': 'clamp(1.73rem, calc(1.57rem + 0.80vw), 2.32rem)',
				'3xl': 'clamp(2.07rem, calc(1.85rem + 1.12vw), 2.90rem)'
			}
		},
	},
	plugins: [],
}
