import React from 'react';
import clsx from 'clsx';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, className, children, ...props }, ref) => {
    const baseClasses = 'p-4 rounded-lg border';

    const variantClasses = {
      success: 'bg-success-50 border-success-200 text-success-800',
      warning: 'bg-warning-50 border-warning-200 text-warning-800',
      error: 'bg-error-50 border-error-200 text-error-800',
      info: 'bg-info-50 border-info-200 text-info-800',
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm">{children}</div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
