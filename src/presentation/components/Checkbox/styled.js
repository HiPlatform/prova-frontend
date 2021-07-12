import styled from "styled-components";

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

export const Text = styled.div`
	font-size: 16px;
	padding: 0 5px;
	color: #000;
	user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px 3px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${(props) => (props.checked ? "#0095ff" : "#e3e3e3")};
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px #002bc7b0;
	}

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}
`;
