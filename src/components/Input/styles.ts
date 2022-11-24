import styled from 'styled-components'

export const InputComponent = styled.div`
  input {
    width: 545px;
    margin: 0 auto;
    color: var(--font-color);
    text-align: center;
    padding: 12px;
    background-color: var(--dark-primary);
    border: none;
    border: 1px solid var(--primary);
    border-radius: 5px;

    &:focus {
      outline: none;
      border: 1px solid var(--secondary);
    }

    ${({ color }) => color === 'bolder' && `
      font-weight: bold;
    `}
  }
`