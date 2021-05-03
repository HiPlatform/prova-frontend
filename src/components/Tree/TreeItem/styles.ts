import styled, { css } from 'styled-components';

interface GroupsProps {
  expanded?: boolean;
}

interface ContainerProps extends GroupsProps {
  level: number;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  margin: 2px 0;
  cursor: pointer;
  padding: 0 20px 0 25px;
  color: #666;
  transition: background-color 100ms linear;

  &:hover {
    background: #ddddd3;
    color: #333;
  }

  div {
    display: flex;
    align-items: center;
    padding: 4px 0;
    padding-left: ${(props) => props.level * 27}px;
    user-select: none;
    width: 100%;

    input {
      width: 19px;
      height: 19px;
    }

    p {
      color: inherit;
      padding: 12px 16px;
      font-weight: 500;
      font-size: 17px;

      @media (max-width: 470px) {
        font-size: 15px;
      }
    }
  }

  button {
    margin-left: auto;
    padding: 10px 12px;
    svg {
      width: 13px;
      height: 13px;
      transition: all 150ms linear;
      fill: #999;

      ${(props) =>
        props.expanded &&
        css`
          fill: #6aa3ff;
          transform: rotate(-180deg);
        `}
    }
  }
`;
