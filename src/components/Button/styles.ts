import styled from 'styled-components'

export const Container = styled.button`
  height: 42px;
  padding: 0 24px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  border-radius: 5px;
  border: 0;

  color: var(--font-color);
  font-size: 16px;
  font-weight: lighter;

  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid var(--secondary);
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.7);
  }
`
