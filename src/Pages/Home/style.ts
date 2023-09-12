import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCoutdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  color: ${(props) => props.theme["gray-100"]};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCoutdownButton)`
  background-color: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${(p) => p.theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCoutdownButton)`
  background-color: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${(p) => p.theme["red-700"]};
  }
`;
