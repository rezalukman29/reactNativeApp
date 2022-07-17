
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
  focused?: boolean
}

function HomeIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 25 25"
      width={props.focused ? props.size + 2 : props.size}
      height={props.size}
      
    >
      <Path
        d="M23 9.99V22a2.006 2.006 0 01-2 2h-6v-8h-5v8H4a2.006 2.006 0 01-2-2V9.99a1.999 1.999 0 01.79-1.59L12.5 1l9.71 7.4A1.999 1.999 0 0123 9.99z"
        fill={props.focused ? props.color : "none" }
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={2}
        
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

export default HomeIcon