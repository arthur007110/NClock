import styled from 'styled-components'

export const ClockTimer = styled.div`
  h1{
    font-family: 'Azeret Mono';
    font-weight: lighter;
    font-size: 6rem;
  }
`

export const ClockView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  padding: 0 1rem;
`

export const ButtonsContainer = styled.div`
  height: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const MainView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: 0;
  min-height: 0;
`

export const PeriodsContainer = styled.div`
  background-color: var(--light-background);
  overflow-y: scroll;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--light-background); 
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--dark-primary);
  }
`

export const Title = styled.h2`
  font-family: 'Azeret Mono';
  text-align: center;
  position: fixed;
  align-self: center;
  background-color: var(--light-background);
  padding: 0.4rem;
  margin: 0.2rem;
`