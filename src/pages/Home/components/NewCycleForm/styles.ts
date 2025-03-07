import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors["gray-100"]};

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    font-size: 1rem;
    gap: 0.25rem;
  }
`;

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors["gray-500"]};
  background: transparent;

  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["gray-500"]};
  }

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    font-size: 1rem;
    height: 2rem;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    width: 3rem;
  }
`;
