import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function BackIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
    >
      <Path
        d="M396.7 0H74.5C33.4 0 0 33.4 0 74.5v322.2c0 41.1 33.4 74.5 74.5 74.5h322.2c41.1 0 74.5-33.4 74.5-74.5V74.5c0-41-33.5-74.5-74.5-74.5zm47.5 396.7c0 26.2-21.3 47.5-47.5 47.5H74.5c-26.2 0-47.5-21.3-47.5-47.5V74.5C27 48.3 48.3 27 74.5 27h322.2c26.2 0 47.5 21.3 47.5 47.5v322.2z"
        fill={props.color}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
      <Path
        d="M344.6 222.1H159.2l47.4-47.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0L117 226c-5.3 5.3-5.3 13.8 0 19.1l70.6 70.5c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1L159.1 249h185.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"
        fill={props.color}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default BackIcon