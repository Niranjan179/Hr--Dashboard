'use client';
import { useState } from 'react';

export default function FilterDropdown({ onFilter }) {
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');

  const departments = ['HR', 'Engineering', 'Sales'];
  const ratings = [1, 2, 3, 4, 5];

  const handleApply = () => {
    onFilter({ department, rating });
  };

  return (
    <div className="flex gap-3 items-center">
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-3 border rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 border-indigo-200 dark:border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium transition-colors duration-200"
        aria-label="Filter by department"
      >
        <option value="">All Departments</option>
        {departments.map((dep) => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-3 border rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 border-indigo-200 dark:border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium transition-colors duration-200"
        aria-label="Filter by rating"
      >
        <option value="">All Ratings</option>
        {ratings.map((r) => (
          <option key={r} value={r}>
            {r} Stars
          </option>
        ))}
      </select>
      <button
        onClick={handleApply}
        className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-semibold"
      >
        Apply
      </button>
    </div>
  );
}