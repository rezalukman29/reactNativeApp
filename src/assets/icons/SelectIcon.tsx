import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function SelectIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.size}
      height={props.size}
    >
      <Path
        fill={props.color}
        d="M6 9.657l1.414 1.414 4.243-4.243 4.242 4.243 1.415-1.414L11.657 4 6 9.657zM6 14.443l1.414-1.414 4.243 4.243 4.242-4.243 1.415 1.414-5.657 5.657L6 14.443z"
      />
    </Svg>
  )
}

export default SelectIcon