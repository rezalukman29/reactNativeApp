
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function ActivityIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.size + 2}
      height={props.size + 2}
      
    >
      <Path
        d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v6.772a6.471 6.471 0 00-1.5-.709V5.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h6.063c.173.534.412 1.037.709 1.5H5.25A2.25 2.25 0 013 18.75V5.25z"
        fill={props.color}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
      <Path
        d="M10.78 7.72a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47a.75.75 0 011.06 0zM10.78 13.22a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47a.75.75 0 011.06 0zM17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.501 8.503V18h2.502a.5.5 0 100-1H18v-2.5a.5.5 0 10-1 0V17h-2.504a.5.5 0 000 1h2.505v2.503a.5.5 0 101 0zM13.25 8.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
        fill={props.color}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
      {/* <Path
        d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      /> */}
    </Svg>
  )
}

export default ActivityIcon