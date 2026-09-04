import React, { useState } from "react";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}
type SharedTabsProps = {
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};
type TriggerProps = SharedTabsProps & { value: string };
type ContentProps = Omit<SharedTabsProps, "setActiveTab"> & { value: string };

export function Tabs({ defaultValue, children, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`space-y-4 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<Record<string, unknown>>,
            { activeTab, setActiveTab },
          );
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({
  children,
  activeTab,
  setActiveTab,
  className = "",
}: SharedTabsProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500 ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<Record<string, unknown>>,
            { activeTab, setActiveTab },
          );
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}: TriggerProps) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab?.(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? "bg-white text-indigo-600 shadow-sm"
          : "hover:bg-gray-50 hover:text-gray-900"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  activeTab,
  className = "",
}: ContentProps) {
  if (activeTab !== value) return null;
  return (
    <div
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
    >
      {children}
    </div>
  );
}
