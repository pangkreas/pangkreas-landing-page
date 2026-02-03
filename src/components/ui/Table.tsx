
import React from 'react';

export function Table({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={`w-full caption-bottom text-sm ${className}`}>{children}</table>
    </div>
  );
}

export function TableHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <thead className={`border-b border-gray-200 bg-gray-50/50 ${className}`}>{children}</thead>;
}

export function TableBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <tbody className={`divide-y divide-gray-200 ${className}`}>{children}</tbody>;
}

export function TableRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <tr className={`transition-colors hover:bg-gray-50/50 ${className}`}>{children}</tr>;
}

export function TableHead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 ${className}`}>{children}</th>;
}

export function TableCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`p-4 align-middle ${className}`}>{children}</td>;
}
