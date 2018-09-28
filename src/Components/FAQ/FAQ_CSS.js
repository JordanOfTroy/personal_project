import styled from 'styled-components'

const colors = {
  lightGreen: '#A1E88B', 
  mediumGreen: '#38E04B',
  darkGreen: '#0E7B11',
  lightGray: '#8F938E',
  mediumGray: '#50524F',
  darkGray: '#232723',
  black: '#090B09',
}

export const Wrapper = styled.section `
  background: gray;
  color: ${colors.lightGreen}
  height: 100vh;
  width: 100vww;
  margin-top: 121px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Question = styled.div `
  display: flex;
  justify-content: space-around;
  // background: #A1E88B;
  height: 140px;
`

export const Title = styled.h1`
  flex-basis: 30%;
  // background: gray;
  text-align: center;
  vertical-align: middle;
  // padding-top: 55px;
  font-weight: bold;
  font-size: 25px
`;
export const Text = styled.h2`
  // background: white;
  flex-basis: 60%;
  text-align: center;
  // padding-top: 55px;
  font-size: 18px;
`;