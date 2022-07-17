
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function InfoIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 96.25 96.25"
      width={props.size + 2}
      height={props.size + 2}
    
      
    >
      <Path
        d="M48.125 0C21.547 0 0 21.546 0 48.125S21.547 96.25 48.125 96.25c26.579 0 48.125-21.546 48.125-48.125S74.704 0 48.125 0zm7.066 80.261c0 .829-.67 1.5-1.5 1.5H42.558a1.5 1.5 0 01-1.5-1.5V37.829a1.5 1.5 0 011.5-1.5h11.135a1.5 1.5 0 011.5 1.5v42.432h-.002zm-7.066-48.273c-4.825 0-8.75-3.925-8.75-8.75s3.925-8.75 8.75-8.75 8.75 3.925 8.75 8.75-3.925 8.75-8.75 8.75z"
        fill={props.color}
        stroke={props.color}
        // strokeLinejoin="round"
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

export default InfoIcon