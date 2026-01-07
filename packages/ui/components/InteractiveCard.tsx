import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface InteractiveCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  href?: string;
  badge?: string;
  badgeVariant?: 'primary' | 'success' | 'warning' | 'info';
  animation?: 'none' | 'fade-in' | 'slide-up' | 'scale';
  className?: string;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  icon,
  title,
  description,
  href,
  badge,
  badgeVariant = 'primary',
  animation = 'fade-in',
  className,
  onClick,
}) => {
  const badgeColors = {
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  const animations = {
    none: '',
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    scale: 'animate-scale',
  };

  const cardContent = (
    <div
      className={clsx(
        'group relative h-full p-6 bg-white rounded-xl border-2 border-secondary-200',
        'transition-all duration-300 ease-out',
        href && 'cursor-pointer hover:border-primary-400 hover:shadow-lg hover:-translate-y-1',
        onClick && 'cursor-pointer hover:border-primary-400 hover:shadow-lg hover:-translate-y-1',
        animations[animation],
        className
      )}
      onClick={onClick}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span
            className={clsx(
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
              badgeColors[badgeVariant]
            )}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="mb-4">
          {typeof icon === 'string' ? (
            <span className="text-4xl">{icon}</span>
          ) : (
            <div className="text-primary-600">{icon}</div>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary-600 leading-relaxed mb-4">{description}</p>

      {/* Arrow indicator */}
      {(href || onClick) && (
        <div className="flex items-center text-primary-600 font-medium text-sm">
          <span className="mr-2">Ver más</span>
          <svg
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-300 pointer-events-none" />
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

// CSS animations to add to global styles or tailwind.config.js
export const interactiveCardAnimations = `
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-scale {
  animation: scale 0.4s ease-out;
}
`;
