module.exports = {
	content: ['./app/**/*.{tsx,jsx,js}'],
	theme: {
		extend: {
			screens: {
				sm: '562px'
			},

			// Create new background properties
			backgroundColor: {
				yellow: '#FFDC00',
				black: '#22222c'
			},

			// Create new text properties
			textColor: {
				yellow: '#FFDC00',
				black: '#22222c'
			},
			// Create new margin properties
			margin: {
				auto: 'auto'
			},

			fontFamily: {
				'kaushan-script': "'Signika', 'sans-serif'"
			}
		}
	},
	plugins: []
};
