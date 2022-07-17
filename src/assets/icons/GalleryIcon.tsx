
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function GalleryIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 36 36"
      width={props.size + 2}
      height={props.size + 2}
      
    >
      <Path
        d="M32.12 10H3.88A1.88 1.88 0 002 11.88v18.24A1.88 1.88 0 003.88 32h28.24A1.88 1.88 0 0034 30.12V11.88A1.88 1.88 0 0032.12 10zM32 30H4V12h28z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
      />
      <Path
        d="M8.56 19.45a3 3 0 10-3-3 3 3 0 003 3zm0-4.6A1.6 1.6 0 117 16.45a1.6 1.6 0 011.56-1.6z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
      />
      <Path
        d="M7.9 28l6-6 3.18 3.18L14.26 28h2l7.46-7.46L30 26.77v-2L24.2 19a.71.71 0 00-1 0l-5.16 5.16-3.67-3.66a.71.71 0 00-1 0L5.92 28z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
      />
      <Path
        d="M30.14 3a1 1 0 00-1-1h-22a1 1 0 00-1 1v1h24z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
      />
      <Path
        d="M32.12 7a1 1 0 00-1-1h-26a1 1 0 00-1 1v1h28z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
      />

    </Svg>
  )
}

export default GalleryIcon