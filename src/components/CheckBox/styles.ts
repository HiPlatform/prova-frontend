import styled from 'styled-components';

export const Container = styled.label`
  cursor: pointer;
  input {
    display: none;
  }

  span {
    display: block;
    position: relative;
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    transform: scale(1);
    border: 1px solid #848992;
    transition: all 0.2s ease;

    &:hover {
      border-color: #5395ff;
    }

    svg {
      position: absolute;
      top: 3px;
      left: 3px;
      fill: none;
      stroke: #ffffff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 18px;
      stroke-dashoffset: 18px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }
  }

  p {
    padding-left: 8px;
    margin: 0;
  }

  input {
    visibility: hidden;
    width: 3px;
    height: 3px;
    &:checked + span {
      background: #6aa3ff;
      border-color: #8ab6fd;
      animation: wave 0.4s ease;
      svg {
        stroke-dashoffset: 0;
      }
    }

    &:disabled + span {
      background: #e4e4e4;
      border-color: #a1a1a1;
      animation: wave 0.4s ease;
      opacity: 0.5;
      cursor: not-allowed;
      svg {
        stroke: #6e6e6e;
        stroke-width: 3;
      }
    }
  }
`;
