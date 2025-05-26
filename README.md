# HR Performance Dashboard

A Next.js-based dashboard for HR managers to track employee performance, manage bookmarks, and view analytics.

## Features
- **Dashboard Homepage**: Displays employee cards with name, email, age, department, and performance rating. Includes View, Bookmark, and Promote buttons.
- **Search & Filter**: Search by name, email, or department; filter by department or rating.
- **Employee Details**: Dynamic page with tabs for Overview, Projects, and Feedback.
- **Bookmarks**: View and manage bookmarked employees.
- **Analytics**: Bar chart showing department-wise average ratings.
- **Bonus**: Pagination, mock login screen, dark/light mode, responsive design.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/Niranjan179/Hr--Dashboard.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Dependencies
- Next.js
- Tailwind CSS
- Zustand
- Chart.js
- react-chartjs-2
- next-themes

## Screenshots
![image](https://github.com/user-attachments/assets/4851c40d-f396-4b44-b30c-6b94160a5479)
![image](https://github.com/user-attachments/assets/316fee57-febd-4341-abe6-1f10439c0a75)
![image](https://github.com/user-attachments/assets/f8700ccb-ca29-4793-8093-be91c1a1c2b9)
![image](https://github.com/user-attachments/assets/a961f7a3-5be3-484b-ba0c-a1811991889a)
![image](https://github.com/user-attachments/assets/ff71ad58-02be-46c0-9378-fc65a0b3085a)
![image](https://github.com/user-attachments/assets/ddf8febd-db84-4127-a728-9fa3dc66c322)
![image](https://github.com/user-attachments/assets/eeb74aee-f042-4349-bfe2-5e617902565f)


## Notes
- Uses `https://dummyjson.com/users` for mock data.
- Dark/light mode implemented with `next-themes`.
- Responsive design for mobile and desktop.
- Pagination implemented with Previous/Next buttons.
