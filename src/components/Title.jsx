import React from 'react';

const Title = ({ color, bgColor, element, titleText = 'Default' }) => {
	const style = {
		color,
		backgrounColor: bgColor
	};

	switch (element) {
		case 'h1':
			return <h1 style={style}>{titleText}</h1>;
		case 'h2':
			return <h2 style={style}>{titleText}</h2>;
		case 'h3':
			return <h3 style={style}>{titleText}</h3>;
		case 'h4':
			return <h4 style={style}>{titleText}</h4>;
		case 'h5':
			return <h5 style={style}>{titleText}</h5>;
		default:
			return <h6 style={style}>{titleText}</h6>;
	}
};
export default Title;
