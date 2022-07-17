import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function FilterIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.size}
      height={props.size}
    >
      <Path
        d="M19 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v6m0-10V4m-7 12a2 2 0 100 4 2 2 0 000-4zm0 0V4M5 8a2 2 0 100-4 2 2 0 000 4zm0 0v12"
        fill={props.color}
        stroke={props.color}
        strokeLinecap="round"
        strokeWidth={1.5}
      />

    </Svg>
  )
}

export default FilterIcon