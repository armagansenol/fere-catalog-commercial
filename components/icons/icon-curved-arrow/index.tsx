import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconCurvedArrow = ({ fill = "var(--transparent-black)", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.12838 4.23303L8.12838 8.54627L10.5203 5.86596L11 6.40353L7.79054 10L4.57883 6.40353L5.05856 5.86596L7.45045 8.54627L7.45045 4.23303C7.4482 2.86764 6.46171 1.7622 5.24324 1.75967L1 1.75967L1 1L5.24324 1C6.83559 1.00252 8.12613 2.44868 8.12838 4.23303Z"
          fill={fill}
          stroke={fill}
        />
      </svg>
    </div>
  )
}

export default IconCurvedArrow
