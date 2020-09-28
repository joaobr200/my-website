import styled, { css } from "styled-components";

const buttonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  border: none;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.primary};
  font: 500 1.4rem "Roboto", sans-serif;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:focus {
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.secundary};
  }

  &:disabled {
    transform: none;
    cursor: not-allowed;
  }
`;

export const FullButton = styled.button`
  ${buttonCSS}
  width:100%;
  height: 40px;
`;

export const LargeButton = styled.button`
  ${buttonCSS}
  width:240px;
  height: 40px;
`;

export const MediumButton = styled.button`
  ${buttonCSS}
  width:180px;
  height: 40px;
`;

export const SmallButton = styled.button`
  ${buttonCSS}
  width:120px;
  height: 25px;
`;
