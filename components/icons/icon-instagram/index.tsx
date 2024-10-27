interface Props {
  fill: string
  rotate?: number
}
const IconInstagram = (props: Props) => {
  return (
    <div className="inherit-dims" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 34.037 34.037">
        <g id="_1161953_instagram_icon" data-name="1161953_instagram_icon" transform="translate(-3.4 -4.8)">
          <path
            id="Path_86"
            data-name="Path 86"
            d="M24.184,16.7a8.784,8.784,0,1,0,8.784,8.784A8.8,8.8,0,0,0,24.184,16.7Zm0,14.411a5.627,5.627,0,1,1,5.627-5.627A5.652,5.652,0,0,1,24.184,31.111Z"
            transform="translate(-3.765 -3.734)"
            fill={props.fill}
          />
          <circle
            id="Ellipse_11"
            data-name="Ellipse 11"
            cx="1.99"
            cy="1.99"
            r="1.99"
            transform="translate(27.555 10.77)"
            fill={props.fill}
          />
          <path
            id="Path_87"
            data-name="Path 87"
            d="M34.692,7.614A9.773,9.773,0,0,0,27.486,4.8H13.35C7.38,4.8,3.4,8.78,3.4,14.75V28.818A9.874,9.874,0,0,0,6.282,36.16a10.014,10.014,0,0,0,7.137,2.676h14a10.133,10.133,0,0,0,7.205-2.676,9.824,9.824,0,0,0,2.814-7.274V14.75A9.837,9.837,0,0,0,34.692,7.614Zm-.274,21.273a6.705,6.705,0,0,1-1.99,5.009,7.093,7.093,0,0,1-5.009,1.784h-14A7.093,7.093,0,0,1,8.409,33.9a6.9,6.9,0,0,1-1.853-5.078V14.75A6.841,6.841,0,0,1,8.409,9.741a6.978,6.978,0,0,1,5.009-1.784H27.555a6.841,6.841,0,0,1,5.009,1.853,7.081,7.081,0,0,1,1.853,4.941V28.886Z"
            transform="translate(0 0)"
            fill={props.fill}
          />
        </g>
      </svg>
    </div>
  )
}

export { IconInstagram }
