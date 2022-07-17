import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function BackSecondaryIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 471.2 471.2"
      width={props.size}
      height={props.size}
    >
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </Svg>
  )
}

export default BackSecondaryIcon