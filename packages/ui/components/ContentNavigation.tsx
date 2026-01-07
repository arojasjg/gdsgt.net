import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface ContentNavigationItem {
  title: string;
  href: string;
}

export interface ContentNavigationProps {
  prev?: ContentNavigationItem;
  next?: ContentNavigationItem;
  className?: string;
}

export const ContentNavigation: React.FC<ContentNavigationProps> = ({ prev, next, className }) => {
  if (!prev && !next) return null;

  return (
    <nav
      className={clsx('flex justify-between items-center gap-4 py-8 border-t border-secondary-200', className)}
      aria-label="Content navigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 group flex items-center gap-3 p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-base"
        >
          <svg
            className="w-6 h-6 text-secondary-400 group-hover:text-primary-600 transition-colors flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-1">
              Anterior
            </div>
            <div className="text-sm font-medium text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-1">
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-base"
        >
          <div className="text-right">
            <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-1">
              Siguiente
            </div>
            <div className="text-sm font-medium text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-1">
              {next.title}
            </div>
          </div>
          <svg
            className="w-6 h-6 text-secondary-400 group-hover:text-primary-600 transition-colors flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
};
