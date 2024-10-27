import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconFacebook = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 4.53326H5.27548V3.08023C5.27548 2.53455 5.72024 2.40733 6.0335 2.40733C6.34604 2.40733 7.95616 2.40733 7.95616 2.40733V0.008404L5.30827 0C2.36885 0 1.69993 1.78919 1.69993 2.93418V4.53326H0V7.00522H1.69993C1.69993 10.1776 1.69993 14 1.69993 14H5.27548C5.27548 14 5.27548 10.1399 5.27548 7.00522H7.68817L8 4.53326Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export { IconFacebook }
