import Student from '../Student/Student';
import './StudentList.css';

const StudentList = ({ studentList }) => {
  //HW: extract list to parent and pass it over as a prop
  return (
    <div id='student-list'>
      {studentList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          lastName={student.lastName}
          age={student.age}
          isStudent={student.isStudent}
          scholarship={student.scholarship}
          address={student.address}
        ></Student>
      ))}
    </div>
  );
};

export default StudentList;
