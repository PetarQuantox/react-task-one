import React, { Component } from 'react';

import Paragraph from './Paragraph';
import Button from './Button';
import Title from './Title';

class Container extends Component {
	state = {
		showTitle: false,
		paragrphColor: 'red',
		paragraphBg: '#fff'
	};

	renderTitles = () => {
		const titles = [
			{ title: 'Heading 1', element: 'h1', color: 'FF5722' },
			{ title: 'Heading 2', element: 'h2', color: '#FFC107' },
			{ title: 'Heading 3', element: 'h3', color: '#3432' },
			{ title: 'Heading 4', element: 'h4', color: '#fefew' },
			{ title: 'Heading 5', element: 'h5', color: '#54442' },
			{ title: 'Heading 6', color: 'red' }
		];

		return titles.map(({ title, element, color, bgColor }) => {
			return (
				<Title
					titleText={title}
					element={element}
					color={color}
					bgColor={bgColor}
					key={title}
				/>
			);
		});
	};
	renderButtons = () => {
		const buttons = [
			{ btnText: 'Button1', isHref: true, color: '#FFF', bgColor: '#F44336' },
			{ btnText: 'Button2', isHref: false, color: '#FFF', bgColor: '#673AB7' },
			{ btnText: 'Button3', isHref: false, color: '#000', bgColor: '#03A9F4' },
			{ btnText: 'Button4', isHref: true, color: '#000', bgColor: '#4CAF50' },
			{ btnText: 'Button5', isHref: false, color: '#000', bgColor: '#FFEB3B' },
			{ btnText: 'Button6', isHref: false, color: '#000', bgColor: '#FF5722' },

			{ btnText: 'Button7', isHref: false, color: '#FFF', bgColor: '#391E63' },
			{ btnText: 'Button8', isHref: false, color: '#FFF', bgColor: '#3F51B5' },
			{ btnText: 'Button9', isHref: false, color: '#000', bgColor: '#00BCD4' },
			{ btnText: 'Button10', isHref: false, color: '#000', bgColor: '#8BC34A' },
			{ btnText: 'Button11', isHref: false, color: '#000', bgColor: '#FFC107' },
			{ btnText: 'Button12', isHref: false, color: '#FFF', bgColor: '#795548' },

			{ btnText: 'Button13', isHref: false, color: '#FFF', bgColor: '#9C27B0' },
			{ btnText: 'Button14', isHref: false, color: '#000', bgColor: '#2196F3' },
			{ btnText: 'Button15', isHref: false, color: '#FFF', bgColor: '#009688' },
			{ btnText: 'Button16', isHref: false, color: '#000', bgColor: '#CDDC39' },
			{ btnText: 'Button17', isHref: false, color: '#000', bgColor: '#FF9800' },
			{ btnText: 'Button18', isHref: false, color: '#000', bgColor: '#9E9E9E' },

			{ btnText: 'Button19', isHref: false, color: '#FFF', bgColor: '#607D8B' },
			{ btnText: 'Button20', isHref: false, color: '#FFF', bgColor: '#000' },
			{ btnText: 'Button21', isHref: false, color: '#000', bgColor: '#FFF' }
		];

		return buttons.map(({ btnText, isHref, color, bgColor }) => {
			return (
				<Button
					btnText={btnText}
					isHref={isHref}
					color={color}
					bgColor={bgColor}
					key={btnText}
					handleClick={e => {
						this.setState({
							paragrphColor: bgColor
						});
					}}
				/>
			);
		});
	};

	render() {
		const { showTitle, paragrphColor, paragraphBg } = this.state;

		return (
			<div className="container">
				{showTitle && this.renderTitles()}

				<Paragraph
					paragraphSize="30px"
					bgColor={paragraphBg}
					color={paragrphColor}
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus corrupti esse voluptatum! Quisquam officia sequi neque aut quaerat! Porro obcaecati perspiciatis, numquam ea consectetur esse adipisci excepturi assumenda animi?"
				/>
				<div className="row">
					<Button
						handleClick={e => this.setState({ showTitle: !showTitle })}
						btnText="Show Title"
					/>
					<Button
						btnText="Btn1"
						handleClick={e => this.setState({ paragraphBg: '#2196F3' })}
						className="primary"
						bgColor="#2196F3"
					/>
					<Button
						handleClick={e => this.setState({ paragraphBg: '#F44336' })}
						btnText="#fff"
						bgColor="#F44336"
					/>
					<Button
						handleClick={e => this.setState({ paragraphBg: '#8bc34a' })}
						btnText="#fff"
						bgColor="#8bc34a"
					/>
				</div>

				<br />

				{this.renderButtons()}
			</div>
		);
	}
}

export default Container;
