import { cn } from "@/lib/utils";

export const ColoredHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "drop-shadow font-semibold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("lg:text-4xl sm:text-2xl text-xl font-semibold", className)}>
      {children}
    </h2>
  );
};


export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("lg:text-3xl sm:text-xl text-lg  font-semibold", className)}>{children}</h2>
  );
};