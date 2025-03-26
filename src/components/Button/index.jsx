const Button = ({label, onClick, className }) => {
  return (
    <button className={`cursor-pointer rounded-xl py-1 px-4 ${className}`} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button
