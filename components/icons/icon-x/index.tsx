import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconX = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.33349 5.50519L13.5459 0H12.3109L7.78291 4.77908L4.16908 0H0L5.46604 7.22746L0 13H1.235L6.01369 7.95195L9.83092 13H14L8.33349 5.50519ZM1.68037 0.845952H3.57759L7.13472 5.46778L7.68705 6.18792L12.3103 12.1953H10.4131L1.68037 0.845952Z"
          fill={fill}
        />
        <path d="M1.015 0.4225H3.885L13.3 12.5775H9.94L1.015 0.4225Z" fill={fill} />
      </svg>
    </div>
  )
}

export { IconX }
