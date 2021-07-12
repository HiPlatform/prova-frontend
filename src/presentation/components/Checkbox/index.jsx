import React from "react";
import PropTypes from "prop-types";

import {
	CheckboxContainer,
	Icon,
	HiddenCheckbox,
	StyledCheckbox,
	Text,
} from "./styled";

const Checkbox = ({ className, checked, children, onClick }) => (
	<CheckboxContainer className={className} onClick={onClick}>
		<HiddenCheckbox checked={checked} />
		<StyledCheckbox checked={checked}>
			<Icon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12" />
			</Icon>
		</StyledCheckbox>
		<Text>{children}</Text>
	</CheckboxContainer>
);

Checkbox.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	checked: PropTypes.bool,
	onClick: PropTypes.node.isRequired,
};

Checkbox.defaultProps = {
	className: "text default",
	checked: false,
};

export default Checkbox;
