import React from 'react';

export interface PageLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, header, footer }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {header && <header className="sticky top-0 z-50">{header}</header>}
      <main className="flex-1">{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
