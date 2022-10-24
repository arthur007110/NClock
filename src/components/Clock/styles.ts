import styled from 'styled-components'

export const ClockTimer = styled.div`
  h1{
    font-family: 'Azeret Mono';
    font-weight: lighter;
    font-size: 6rem;
  }
`

export const ClockView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
`

export const PeriodsContainer = styled.div`
  overflow: scroll;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`