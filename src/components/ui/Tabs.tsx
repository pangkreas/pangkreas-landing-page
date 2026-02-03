
import React, { useState } from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, children, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`space-y-4 ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className = '' }: any) {
  return (
    <div className={`inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500 ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ value, children, activeTab, setActiveTab, className = '' }: any) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? 'bg-white text-indigo-600 shadow-sm' : 'hover:bg-gray-50 hover:text-gray-900'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, activeTab, className = '' }: any) {
  if (activeTab !== value) return null;
  return (
    <div className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}>
      {children}
    </div>
  );
}
