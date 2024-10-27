type Props = {
  fill?: string
  rotate?: number
}

const IconArrow = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg height="100%" width="100%" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.001 17.9998L18.9166 27.0842L9.83214 17.9998L18.9166 8.91534L28.001 17.9998Z" fill={fill} />
        <path d="M19.0848 26.9159L10.0004 36.0004L0.915947 26.9159L10.0004 17.8315L19.0848 26.9159Z" fill={fill} />
        <path d="M19.0848 9.08357L10.0004 18.168L0.915947 9.08357L10.0004 -0.000853979L19.0848 9.08357Z" fill={fill} />
      </svg>
    </div>
  )
}

export default IconArrow
