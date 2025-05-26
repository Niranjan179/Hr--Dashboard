'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart({ data, type }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: { 
              position: 'top',
              labels: {
                font: { size: 14, family: 'Inter, sans-serif' },
                color: '#4B5563', // gray-600
              },
            },
            title: { 
              display: true, 
              text: 'Department-wise Average Ratings',
              font: { size: 18, family: 'Inter, sans-serif', weight: '600' },
              color: '#1F2937', // gray-800
              padding: { bottom: 20 },
            },
            tooltip: {
              backgroundColor: '#4F46E5', // indigo-600
              titleFont: { family: 'Inter, sans-serif' },
              bodyFont: { family: 'Inter, sans-serif' },
            },
          },
          scales: {
            y: {
              ticks: { color: '#4B5563', font: { family: 'Inter, sans-serif' } },
              grid: { color: '#E5E7EB', drawBorder: false },
            },
            x: {
              ticks: { color: '#4B5563', font: { family: 'Inter, sans-serif' } },
              grid: { display: false },
            },
          },
        }}
      />
    </div>
  );
}