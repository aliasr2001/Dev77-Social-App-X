import SvgComp from "./SvgComp";

function LoginWithBtn(
   {
    width = "15rem",
    bgColor = "white",
    btnText = "Post",
    hoverbgColor = "#EEEEEE",
    hoverTextColor = "#3c4043",
    padding = "0.5rem",
    fontSize = "20px",
    onClick,
    disabled = false,
    fontWeight = "bold",
    margin = "0",
    
  }
) {

  const baseClasses = "flex justify-start rounded-4xl font-bold transition-all duration-300 text-[20px]";
  const cursorClass = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div
      role="button"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`${baseClasses} ${cursorClass} flex items-center gap-2 `}
      style={{
        backgroundColor: bgColor,
        color: hoverTextColor,
        width: width,
        padding: padding,
        fontSize: fontSize,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        fontWeight: fontWeight,
        margin: margin,
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
      <div className="svgDiv ">
      <SvgComp pathD="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" fill="black  " stroke="none" svgSize="22px"/>
      </div>
      <div className="justify-center w-full flex">{btnText}</div>
      
    </div>
  );
}

export default LoginWithBtn;