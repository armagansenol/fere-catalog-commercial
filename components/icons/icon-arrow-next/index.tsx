type Props = {
  fill?: string
  rotate?: number
}

const IconArrowNext = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg height="100%" width="100%" viewBox="0 0 284 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M228.382 0V21.3128H0V42.6872H228.382V64L284 32L228.382 0Z" fill={fill} />
      </svg>
    </div>
  )
}

export default IconArrowNext
