import styled from 'styled-components'

export const InspectorPanel = styled.div`
  background: var(--light-background);
  height: 250px;
  width: 100%;
  opacity:1;
  visibility: visible;
  transition: all 0.25s ease;
  text-align: center;
  margin-top: auto;

  ul {
    padding: 0;
    margin: 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  Button{
    width: 200px;
  }
`

export const CreateTaskContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-items: center;
`
