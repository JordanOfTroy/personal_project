import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section `
  background: gray;
  color: lightgreen
  height: 100vh;
  width: 100vww;
  margin-top: 121px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 50px;
`;

export default function Clearance () {
  return (
    <Wrapper>
      <h1>Clearance Coming Soon!</h1>
      <h3>Please stay tuned for epic epics of epicness!</h3>
    </Wrapper>
  )
}