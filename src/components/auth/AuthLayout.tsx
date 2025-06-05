// components/AuthLayout.tsx
import React from "react";
import Button from "../custom/Button";
import { ArrowLeft } from "lucide-react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="m-3
    "
    >
      <Button
        variant="outline"
        className="mb-6"
        size="small"
        onClick={() => window.history.back()}
        aria-label="Go back"
      >
        <ArrowLeft className="mr-2" />
        Back
      </Button>
      <div className="h-full flex items-center justify-center bg-background">
        <div className="w-full max-w-md shadow-xl rounded-2xl p-8 sm:p-10 border border-text-muted/10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
