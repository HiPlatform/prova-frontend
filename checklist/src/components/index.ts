import styled, { css } from "styled-components";
import ListItem from "./ListItem";

const TextStyles = css`
  color: #333;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: normal;

  ${TextStyles}
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;

  ${TextStyles}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export { ListItem };
