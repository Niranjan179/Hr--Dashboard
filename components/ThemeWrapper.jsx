'use client';
import { ThemeProvider } from 'next-themes';

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}