export const DottedButton = ({ onClick }) => {
  return (
    <button
      style={{
        height: 30,
        width: 65,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 15,
        borderStyle: 'solid',
        border: '2px #8687a7 dashed',
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#8687a7',
      }}
      onClick={() => onClick()}
    >
      +
    </button>
  )
}
