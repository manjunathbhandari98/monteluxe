import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  children,
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center cursor-pointer justify-center font-medium transition-all duration-300 focus:outline-none";

  const variantClasses = {
    primary:
      "bg-luxury-gold text-background-dark hover:bg-opacity-90",
    secondary:
      "bg-luxury-green text-text-light hover:bg-opacity-90",
    outline:
      "bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10",
  };

  const sizeClasses = {
    small: "text-xs px-4 py-2",
    medium: "text-sm px-6 py-3",
    large: "text-base px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <button
      className={combinedClasses}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
