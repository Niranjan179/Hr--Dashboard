'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setValue(term);
    onSearch(term);
  };

  return (
    <div className="relative w-full sm:w-1/2">
      <input
        type="text"
        placeholder="Search by name, email, or department..."
        value={value}
        onChange={handleChange}
        className="w-full p-3 pl-10 border rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 border-indigo-200 dark:border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium transition-colors duration-200"
        aria-label="Search employees"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}