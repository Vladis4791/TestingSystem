import React from "react";
import Button from "../Button/Button";

const ActionButtons = ({
	goNext,
	goPrevious,
}: {
	goNext: () => void;
	goPrevious: () => void;
}) => {
	return (
		<div>
			<Button onClick={goPrevious} title="Назад" />
			<Button onClick={goNext} title="Далее" />
		</div>
	);
};

export default ActionButtons;
