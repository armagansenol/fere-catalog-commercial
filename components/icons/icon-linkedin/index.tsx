import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconLinkedin = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.190214 4.55358H3.40489V14H0.190214V4.55358ZM1.81907 0C0.718821 0 0 0.705329 0 1.6311C0 2.53782 0.697786 3.26366 1.777 3.26366H1.7975C2.91879 3.26366 3.61707 2.53779 3.61707 1.6311C3.59604 0.705329 2.91882 0 1.81907 0ZM11.2978 4.33168C9.59143 4.33168 8.82696 5.24817 8.4005 5.8909V4.55358H5.18486C5.22743 5.43977 5.18486 14 5.18486 14H8.4005V8.72446C8.4005 8.44191 8.42154 8.1604 8.50614 7.95799C8.73897 7.39394 9.26804 6.80983 10.1555 6.80983C11.3199 6.80983 11.7849 7.67649 11.7849 8.9458V14H15V8.58322C15 5.68173 13.4142 4.33168 11.2978 4.33168Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export { IconLinkedin }
