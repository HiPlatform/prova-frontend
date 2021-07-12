import React, { useState } from "react";
import PropTypes from "prop-types";

import {
	Container,
	DropdownWrapper,
	Icon,
	ArrowDownLayer,
	CheckboxLayer,
	DropdownChildren,
} from "./styled";

const Dropdown = ({ item, children, className, onClick }) => {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [startEffects, setStartEffects] = useState(false);

	const handleOpenDropdown = () => {
		setOpenDropdown((current) => !current);
	};

	const renderArrowDown = () => (
		<ArrowDownLayer onClick={handleOpenDropdown}>
			<Icon viewBox="0 0 20 20" open={openDropdown}>
				<polyline points="15 9 10 13 5 9 9" />
			</Icon>
		</ArrowDownLayer>
	);

	const renderCheckboxLayer = () => (
		<CheckboxLayer className={`${className} dropdown-layer`} onClick={onClick}>
			{children}
		</CheckboxLayer>
	);

	const renderDropdown = () => {
		if (openDropdown) {
			setTimeout(() => setStartEffects(true), 100);
			return <DropdownChildren open={startEffects}>{item}</DropdownChildren>;
		}
		setTimeout(() => setStartEffects(false), 200);
		return null;
	};

	const handleOpeningList = () => {
		if (item.length > 1) return renderArrowDown();
		return null;
	};

	return (
		<Container className={`${className} dropdown-container`}>
			<DropdownWrapper>
				{renderCheckboxLayer()}
				{handleOpeningList()}
			</DropdownWrapper>
			{renderDropdown()}
		</Container>
	);
};

Dropdown.propTypes = {
	className: PropTypes.string,
	item: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
	className: "text default",
};

export default Dropdown;
