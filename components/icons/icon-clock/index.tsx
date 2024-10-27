type Props = {
  fill?: string
  rotate?: number
}

const IconClock = ({ fill = "#fff", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
        <path
          id="Path_6813"
          data-name="Path 6813"
          d="M0,11A11,11,0,1,1,11,22,11,11,0,0,1,0,11Zm1.467,0A9.533,9.533,0,1,0,11,1.467,9.533,9.533,0,0,0,1.467,11Zm9.013.521A.733.733,0,0,1,10.267,11V5.134h1.467V10.7l3.418,3.41L14.11,15.151Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconClock
