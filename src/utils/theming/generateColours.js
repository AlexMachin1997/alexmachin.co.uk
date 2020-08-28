const generateColours = (theme, colour) => {
	switch (colour) {
		case 'yellow': {
			return theme.yellow;
		}

		case 'black': {
			return theme.black;
		}

		case 'white': {
			return theme.white;
		}

		default: {
			return colour;
		}
	}
};

export default generateColours;
