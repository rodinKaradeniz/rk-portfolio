const getBgVariantStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return "bg-[#f9eddd]";
    case "outline":
      return "bg-transparent border-[#0f172a] border-[0.5px]";
    case "outline-secondary":
      return "bg-transparent border-[#f9eddd] border-[0.5px]";
    default:
      return "bg-gradient-primary";
  }
};

const getTextVariantStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return "text-neutral-900";
    case "outline":
      return "text-[#0f172a]";
    case "outline-secondary":
      return "text-[#f9eddd]";
    default:
      return "text-neutral-100";
  }
};

const getHoverDirection = (hoverDirection) => {
  switch (hoverDirection) {
    case "right":
      return "hover:translate-x-1";
    case "left":
      return "hover:-translate-x-1";
    case "up":
      return "hover:-translate-y-1";
    case "down":
      return "hover:translate-y-1";
  }
};

const Button = ({
  title,
  variant = "default",
  hoverDirection,
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  return (
    <button
      className={`py-2 px-5 rounded-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden shadow-md hover:shadow-lg hover:shadow-black/50 transition-all duration-300 ease-in-out ${getBgVariantStyle(
        variant
      )} ${className} ${getTextVariantStyle(variant)} ${getHoverDirection(
        hoverDirection
      )}`}
      {...props}
    >
      {IconLeft && <div className="w-5 h-5">{IconLeft}</div>}
      {title && <p className="tracking-tight">{title}</p>}
      {IconRight && <div className="w-5 h-5">{IconRight}</div>}
    </button>
  );
};

export default Button;
