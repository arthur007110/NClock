import styled from 'styled-components'

export const Item = styled.div`
  padding: 10px;
  font-size: 12px;
  border-bottom: 1px solid var(--background);
  transition: all 0.25s ease;
  animation: fadeInRight .25s ease forwards;

  &:hover {
    opacity: 0.95;
    transition: all 0.25s ease;
    cursor: pointer;
    background: var(--primary);
  }
`