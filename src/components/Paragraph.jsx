import React from 'react';

const Paragraph = ({
	text = 'default',
	paragraphSize,
	color = '#F44336',
	bgColor = '#fff'
}) => {
	const style = {
		fontSize: paragraphSize,
		color,
		backgroundColor: bgColor
	};
	return <p style={style}>{text}</p>;
};

export default Paragraph;
