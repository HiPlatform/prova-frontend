import styled from "styled-components";

const handleOpacity = (open) => {
	if (!open) return "0";
	return "1";
};

export const Container = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const DropdownWrapper = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	height: 80px;

	&:hover {
		background: #f5f5f5;
	}
`;

export const Icon = styled.svg`
	fill: none;
	stroke-width: 2px;
	width: 35px;
	transition: all 0.3s;

	${(props) =>
		props.open
			? `stroke: #0095ff; transform: rotate(180deg);`
			: `stroke: black;`}
`;

export const ArrowDownLayer = styled.div`
	display: flex;
	width: 80px;
	height: 80px;
	align-items: center;
	justify-content: center;
`;

export const CheckboxLayer = styled.span`
	display: flex;
	justify-content: flex-start;
	padding: 20px 15px;
	width: 100%;
`;

export const DropdownChildren = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	transition: opacity 0.6s;

	opacity: ${(props) => handleOpacity(props.open)};

	& .dropdown-container {
		padding-left: 25px;
	}
`;
