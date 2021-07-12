import React from "react";
import PropTypes from "prop-types";

import { Dropdown, Checkbox } from "../../../../components";

const Item = ({ className, itemList, children, checked, onCheckItem }) => (
	<Dropdown item={itemList} onClick={onCheckItem} className={className}>
		<Checkbox checked={checked}>{children}</Checkbox>
	</Dropdown>
);

Item.propTypes = {
	className: PropTypes.string,
	itemList: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	checked: PropTypes.bool.isRequired,
	onCheckItem: PropTypes.node.isRequired,
};

Item.defaultProps = {
	className: "default",
};

export default Item;
