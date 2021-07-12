import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "../Item";

import { Container } from "./styled";

const useForceUpdate = () => {
	// eslint-disable-next-line no-unused-vars
	const [value, setValue] = useState(0);
	// eslint-disable-next-line no-shadow
	return () => setValue((value) => value + 1);
};

const List = ({ data }) => {
	// eslint-disable-next-line no-unused-vars
	const [checkeds, setCheckeds] = useState([]);
	const forceUpdate = useForceUpdate();

	const handleVerifyCheckedItems = (item) => item.checked;

	const handleCheckItems = (tree, item) => {
		const updateListTree = (level) => {
			level();
			forceUpdate();
			setCheckeds(tree);
		};

		const verifyIsChecked = (source) => {
			if (source.checked) return Object.assign(source, { checked: false });
			return Object.assign(source, { checked: true });
		};

		const checkFirstLevel = () => {
			// eslint-disable-next-line array-callback-return
			Object.keys(tree).find((branch) => {
				if (tree[branch].id === item.id) {
					Object.keys(tree[branch].children).map((it) =>
						verifyIsChecked(tree[branch].children[it])
					);
					return verifyIsChecked(tree[branch]);
				}
			});
		};

		const checkSecondLevel = () => {
			// eslint-disable-next-line array-callback-return
			Object.keys(tree).map((branch) => {
				// eslint-disable-next-line array-callback-return
				Object.keys(tree[branch].children).find((leaf) => {
					if (tree[branch].children[leaf].id === item.id) {
						Object.keys(tree[branch].children[leaf].children).map((fruit) =>
							verifyIsChecked(tree[branch].children[leaf].children[fruit])
						);
						return verifyIsChecked(tree[branch].children[leaf]);
					}
				});
			});
		};

		const checkThirdLevel = () => {
			// eslint-disable-next-line array-callback-return
			Object.keys(tree).map((branch) => {
				// eslint-disable-next-line array-callback-return
				Object.keys(tree[branch].children).map((leaf) => {
					// eslint-disable-next-line array-callback-return
					Object.keys(tree[branch].children[leaf].children).find((fruit) => {
						if (tree[branch].children[leaf].children[fruit].id === item.id) {
							Object.keys(
								tree[branch].children[leaf].children[fruit].children
							).map((seeds) =>
								verifyIsChecked(
									tree[branch].children[leaf].children[fruit].children[seeds]
								)
							);
							return verifyIsChecked(
								tree[branch].children[leaf].children[fruit]
							);
						}
					});
				});
			});
		};

		const checkFourthLevel = () => {
			// eslint-disable-next-line array-callback-return
			Object.keys(tree).map((branch) => {
				// eslint-disable-next-line array-callback-return
				Object.keys(tree[branch].children).map((leaf) => {
					// eslint-disable-next-line array-callback-return
					Object.keys(tree[branch].children[leaf].children).map((fruit) => {
						Object.keys(
							tree[branch].children[leaf].children[fruit].children
						).find(
							// eslint-disable-next-line array-callback-return
							(seeds) => {
								if (
									tree[branch].children[leaf].children[fruit].children[seeds]
										.id === item.id
								) {
									Object.keys(
										tree[branch].children[leaf].children[fruit].children[seeds]
											.children
									).map((root) =>
										verifyIsChecked(
											tree[branch].children[leaf].children[fruit].children[
												seeds
											].children[root]
										)
									);
									return verifyIsChecked(
										tree[branch].children[leaf].children[fruit].children[seeds]
									);
								}
							}
						);
					});
				});
			});
		};

		const checkFifthLevel = () => {
			// eslint-disable-next-line array-callback-return
			Object.keys(tree).map((branch) => {
				// eslint-disable-next-line array-callback-return
				Object.keys(tree[branch].children).map((leaf) => {
					// eslint-disable-next-line array-callback-return
					Object.keys(tree[branch].children[leaf].children).map((fruit) => {
						Object.keys(
							tree[branch].children[leaf].children[fruit].children
							// eslint-disable-next-line array-callback-return
						).map((seeds) => {
							Object.keys(
								tree[branch].children[leaf].children[fruit].children[seeds]
									.children
								// eslint-disable-next-line array-callback-return
							).find((root) => {
								if (
									tree[branch].children[leaf].children[fruit].children[seeds]
										.children[root].id === item.id
								) {
									Object.keys(
										tree[branch].children[leaf].children[fruit].children[seeds]
											.children[root].children
									).map((ground) =>
										verifyIsChecked(
											tree[branch].children[leaf].children[fruit].children[
												seeds
											].children[root].children[ground]
										)
									);
									return verifyIsChecked(
										tree[branch].children[leaf].children[fruit].children[seeds]
											.children[root]
									);
								}
							});
						});
					});
				});
			});
		};

		if (item.level === 0) return updateListTree(checkFirstLevel);
		if (item.level === 1) return updateListTree(checkSecondLevel);
		if (item.level === 2) return updateListTree(checkThirdLevel);
		if (item.level === 3) return updateListTree(checkFourthLevel);
		if (item.level === 4) return updateListTree(checkFifthLevel);
	};

	// eslint-disable-next-line no-console
	React.useEffect(() => setCheckeds(data), []);

	const renderRecursiveLists = (items) =>
		Object.keys(items).map((item, index) => (
			<Item
				key={`${index}-${items[item].id}`}
				itemList={renderRecursiveLists(items[item].children)}
				onCheckItem={() => handleCheckItems(checkeds, items[item])}
				checked={handleVerifyCheckedItems(items[item])}
			>
				{items[item].name}
			</Item>
		));

	return <Container>{renderRecursiveLists(checkeds)}</Container>;
};

List.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.object.isRequired,
};

export default List;
