import styled, { css } from "styled-components";
import List from "./List";
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

export const Monospaced = styled.span`
  font-family: monospace;
  font-size: 12px;

  * {
    font-family: monospace;
  }

  ${TextStyles}
`;

export const Link = styled.a`
  color: #0d9ad2;
  text-decoration: none;
`;

export { List, ListItem };
