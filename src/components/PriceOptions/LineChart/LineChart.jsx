
import { LineChart as LChart, Line , XAxis, YAxis, Tooltip} from 'recharts';


const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: "John", math: 85, physics_marks: 75, chemistry_marks: 90 },
        { id: 2, name: "Emily", math: 92, physics_marks: 88, chemistry_marks: 94 },
        { id: 3, name: "Michael", math: 78, physics_marks: 72, chemistry_marks: 80 },
        { id: 4, name: "Sarah", math: 88, physics_marks: 79, chemistry_marks: 87 },
        { id: 5, name: "David", math: 95, physics_marks: 91, chemistry_marks: 96 },
        { id: 6, name: "Sophia", math: 72, physics_marks: 68, chemistry_marks: 74 },
        { id: 7, name: "James", math: 89, physics_marks: 84, chemistry_marks: 91 },
        { id: 8, name: "Olivia", math: 80, physics_marks: 70, chemistry_marks: 85 },
        { id: 9, name: "William", math: 94, physics_marks: 89, chemistry_marks: 92 },
        { id: 10, name: "Ava", math: 87, physics_marks: 81, chemistry_marks: 89 }
    ];
    
    
    return (
        <div>
           <LChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>

            <Line dataKey={'math'} stroke='red'></Line>
            <Line dataKey={'physics_marks'} stroke='blue'></Line>
            <Tooltip></Tooltip>
           </LChart>
        </div>
    );
};

export default LineChart;