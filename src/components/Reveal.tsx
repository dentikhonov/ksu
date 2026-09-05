import type { ReactNode } from "react";
import "./Reveal.css";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      data-delay={delay || undefined}
    >
      {children}
    </div>
  );
}
