import React from 'react'
import styled from 'styled-components'

import { IntersectionValue } from './position'
import Stone from './stone'

const Wrapper = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  position: relative;
  background-color: #e3ccb5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
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
  connectsBottom: boolean
  connectsLeft: boolean
  connectsRight: boolean
  connectsTop: boolean
  label: string
  placeStone: (stone: IntersectionValue) => void
  starPoint: boolean
  stone: IntersectionValue
}

const Intersection = ({
  connectsBottom,
  connectsLeft,
  connectsRight,
  connectsTop,
  label,
  starPoint,
  stone,
  placeStone,
}: Parameters): React.ReactElement => (
  <Wrapper aria-label={label} onClick={placeStone}>
    <HorizontalLine connectsLeft={connectsLeft} connectsRight={connectsRight} />
    <VerticalLine connectsTop={connectsTop} connectsBottom={connectsBottom} />

    {stone === 0 ? (
      starPoint && <StartPoint />
    ) : (
      <Stone isBlack={stone === 1} />
    )}
  </Wrapper>
)

export default Intersection
