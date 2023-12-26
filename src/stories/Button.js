import './GlobalStyles.css'

export const Button = ({
  title,
  onClick,
  active = true,
  showRemove = false,
  onRemove,
  style,
  buttonStyle,
}) => {
  return (
    <div className='button-div' style={style}>
      <button
        className='buttonStyles'
        style={{
          borderWidth: active ? 0 : 1,
          backgroundColor: active ? '#3133b1' : 'transparent',
          color: active ? 'white' : 'black',
          ...buttonStyle,
        }}
        onClick={() => onClick()}
      >
        {title}
      </button>
      {showRemove && (
        <button className='remove-button' onClick={() => onRemove()}>
          +
        </button>
      )}
    </div>
  )
}
