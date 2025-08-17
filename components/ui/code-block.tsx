"use client";

import { CopyButton } from "@/components/ui/copy-button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CodeBlock = forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement>
>(({ children, className, ...props }, ref) => {
  const child = children as React.ReactElement;

  // Extract raw string for copy button
  const codeString = String(child.props.children).replace(/\n$/, "");
  const lang = child.props?.["data-language"] || "text";

  return (
    <div className="relative group">
      <pre
        ref={ref}
        className={cn(
          "relative rounded-lg p-4 overflow-x-auto",
          className
        )}
        {...props}
      >
        {child}
      </pre>

      <CopyButton
        value={codeString}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <span className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {lang}
      </span>
    </div>
  );
});

CodeBlock.displayName = "CodeBlock";
