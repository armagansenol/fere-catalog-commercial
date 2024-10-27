type Props = {
  fill?: string
  rotate?: number
}

const IconClose = ({ fill = "#000", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.3478 0H17.2174L12.1304 8.40857L18 18H12.1304L9 11.8286L5.86957 18H0L5.86957 8.40857L0.782609 0H6.65217L9 4.96286L11.3478 0Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconClose
