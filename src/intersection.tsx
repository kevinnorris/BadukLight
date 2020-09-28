import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  background-color: #e3ccb5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HorizontalLine = styled.span`
  position: absolute;
  top: 50%;
  width: ${(props) =>
    props.connectsLeft && props.connectsRight ? '100%' : '50%'};
  height: 1px;
  left: ${(props) => (!props.connectsLeft ? '50%' : ' 0')};
  background-color: black;
`

const VerticalLine = styled.span`
  position: absolute;
  left: 50%;
  width: 1px;
  height: ${(props) =>
    props.connectsTop && props.connectsBottom ? '100%' : '50%'};
  top: ${(props) => (!props.connectsTop ? '50%' : '0')};
  background-color: black;
`

const StartPoint = styled.span`
  width: 1rem;
  height: 1rem;
  background: black;
  border-radius: 50%;
`

type Parameters = {
  connectsLeft: boolean
  connectsRight: boolean
  connectsTop: boolean
  connectsBottom: boolean
  starPoint: boolean
}

const Intersection = ({
  connectsLeft,
  connectsRight,
  connectsTop,
  connectsBottom,
  starPoint,
}: Parameters): React.ReactElement => (
  <Wrapper>
    <HorizontalLine connectsLeft={connectsLeft} connectsRight={connectsRight} />
    <VerticalLine connectsTop={connectsTop} connectsBottom={connectsBottom} />
    {starPoint && <StartPoint />}
  </Wrapper>
)

export default Intersection
