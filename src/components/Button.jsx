import React from 'react';

const Button = ({
	btnText = 'default',
	bgColor,
	color,
	isHref = false,
	handleClick
}) => {
	const style = {
		color,
		backgroundColor: bgColor
	};

	{
		return isHref ? (
			<a style={style} onClick={handleClick} className="btn waves-effect">
				{btnText}
			</a>
		) : (
			<button style={style} onClick={handleClick} className="btn waves-effect">
				{btnText}
			</button>
		);
	}
};
export default Button;
