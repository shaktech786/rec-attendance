import React from 'react';
import './StudentInfo.css';
import StudentDB from "../StudentDB";
import AttendanceButton from "./AttendanceButton";

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);

        this.students = StudentDB.students;
        this.seventhAndEigthGrade = this.students.filter(student => student.grade === 7 || student.grade === 8);
        this.ninthAndTenthGrade = this.students.filter(student => student.grade === 9 || student.grade === 10);
        this.eleventhAndTwelvthGrade = this.students.filter(student => student.grade === 11 || student.grade === 12);
    }
    render() {
        return (
            <div>
                <div className='class-list'>
                    <p>7th and 8th</p>
                    {this.seventhAndEigthGrade.map((student, i) => <AttendanceButton key={i} student={student}/>)}
                </div>
                    <p>9th and 10th</p>
                <div className='class-list'>
                    {this.ninthAndTenthGrade.map((student, i) => <AttendanceButton key={i} student={student}/>)}
                </div>
                    <p>11th and 12th</p>
                <div className='class-list'>
                    {this.eleventhAndTwelvthGrade.map((student, i) => <AttendanceButton key={i} student={student}/>)}
                </div>
            </div>
        )
    }
}

export default StudentInfo;
