"use client";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong!!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

const BuggyComponent = () => {
  const handleClick = () => {
    throw new Error("Oops!! Something is broke");
  };
  return (
    <button className="border-t-orange-700" onClick={handleClick}>
      Breaking the app
    </button>
  );
};

const ErrorBoundaryExample = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryExample;
