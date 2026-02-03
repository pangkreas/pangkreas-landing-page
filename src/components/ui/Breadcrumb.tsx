
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export function Breadcrumb({ items, className = '' }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav className={`flex text-sm text-gray-500 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {item.href && !item.current ? (
              <a href={item.href} className="hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ) : (
              <span className={item.current ? 'font-semibold text-gray-900' : ''}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
