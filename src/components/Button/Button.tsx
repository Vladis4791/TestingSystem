import React from "react";
import "./Button.scss";

const Button = ({
	title,
	onClick,
	disabled = false,
}: {
	title: string;
	onClick: () => void;
	disabled?: boolean;
}) => {
	return (
		<button className="Button" onClick={onClick} disabled={disabled}>
			{title}
		</button>
	);
};

export default Button;
