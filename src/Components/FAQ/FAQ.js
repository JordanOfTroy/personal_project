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
`;

const Question = styled.div `
  display: flex;
  justify-content: space-around;
  // background: lightgreen;
  height: 140px;
`

const Title = styled.h1`
  flex-basis: 30%;
  // background: gray;
  text-align: center;
  vertical-align: middle;
  // padding-top: 55px;
  font-weight: bold;
  font-size: 25px
`;
const Text = styled.h2`
  // background: white;
  flex-basis: 60%;
  text-align: center;
  // padding-top: 55px;
  font-size: 18px;
`;

export default function FAQ () {
  return (
    <Wrapper>
      <Question>
        <Title>Why does shipping cost so much? </Title>
        <Text>
          Excellent question! As we are shipping live animals, 
          the only method we us is Next-Day Priority shipping. 
          If multiple animals are being sent, we will package
          in the same box for easier shipping.  
        </Text>
      </Question>
      <Question>
        <Title>How much wood could a woodchuck chuck? </Title>
        <Text>
          A woodchuck would chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
      <Question>
        <Title> Lorem ipsum dolor sit amet consectetur que? </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias odio ipsa delectus optio modi minima quas eveniet totam voluptate animi similique vel, exercitationem minus dolor quod in placeat cupiditate.
        </Text>
      </Question>
    </Wrapper>
  )
}