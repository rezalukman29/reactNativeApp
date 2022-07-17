import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


const Back = (props: React.SVGProps<SVGSVGElement>) => (
    <Svg
      viewBox="0 0 471.2 471.2"
      width={20}
      height={20}
    >
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </Svg>
  )

export default Back