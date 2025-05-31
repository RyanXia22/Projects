import './App.css';
import ListItem from './list_item';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const strengthHistory = {
  'Bench Press': {
    dates: ['2025-03-01', '2025-03-15', '2025-04-01'],
    scores: [80, 90, 100],
  },
  'Squat': {
    dates: ['2025-03-05', '2025-03-20', '2025-04-02'],
    scores: [95, 100, 95],
  },
};
export const data = {
  labels: strengthHistory['Bench Press'].dates,
  datasets: [
    {
      label: 'Bench Press',
      data: strengthHistory['Bench Press'].scores,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

function App() {
  const fakeWorkouts = [
    {
      date: '2025-04-05',
      exercises: [
        { name: 'Bench Press', sets: 3, reps: 10, weight: 135 },
        { name: 'Squat', sets: 4, reps: 8, weight: 185 },
      ],
      weight: 95,
    },
    {
      date: '2025-04-04',
      exercises: [
        { name: 'Deadlift', sets: 3, reps: 5, weight: 225 },
      ],
    },
  ];
  
  const [dateQuery, setDateQuery] = useState('');
  const [exerciseQuery, setExerciseQuery] = useState('');
  const searchedWorkout = fakeWorkouts.find(w => w.date === dateQuery);
  return (
    <div className="App">
        <h1>
          Fitness Progress tracker
        </h1>
        <h3 style={{margin:'5px'}}>Last Workout</h3>
        < ListItem content={fakeWorkouts[0]} />
        <div style={{ width: '800px', height: '400px' }}>
          <Line options={options} data={data} />
        </div>
        
        {/* Search by Date */}
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Search Workout by Date</h2>
          <input
            type="date"
            className="border p-2 rounded"
            value={dateQuery}
            onChange={e => setDateQuery(e.target.value)}
          />
          {searchedWorkout ? (
            <ListItem content={searchedWorkout}/>
          ) : (
            dateQuery && <p className="mt-2 text-gray-500">No workout found for that date.</p>
          )}
        </div>
    </div>
  );
}

export default App;
