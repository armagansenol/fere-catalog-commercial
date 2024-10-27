import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconArrowForm = ({ fill = "var(--transparent)", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg height="100%" width="100%" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 1.92593L1.40704 4L7.55505e-08 3.1358L4 -3.49691e-07L8 3.1358L6.59296 4L4 1.92593Z" fill={fill} />
      </svg>
    </div>
  )
}

export default IconArrowForm
