
function Button(
  {
    width = "15rem",
    bgColor = "white",
    btnText = "Post",
    hoverbgColor = "gray",
    hoverTextColor = "black",
    padding = "0.5rem",
    fontSize = "20px",
    onClick,
    disabled = false,
  }
) {
  const baseClasses = "border border-white flex justify-center rounded-4xl font-bold transition-all duration-300 text-[20px]";
  const cursorClass = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div
      role="button"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`${baseClasses} ${cursorClass}`}
      style={{
        backgroundColor: bgColor,
        color: hoverTextColor,
        width: width,
        padding: padding,
        fontSize: fontSize,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={(e) => {
        if (disabled) return;
        if (onClick) onClick(e);
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.backgroundColor = hoverbgColor;
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.backgroundColor = bgColor;
      }}
    >
      {btnText}
    </div>
  );
}

export default Button