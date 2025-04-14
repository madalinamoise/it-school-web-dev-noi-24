import Student from '../Student/Student';
import './StudentList.css';

const StudentList = () => {
  //HW: extract list to parent and pass it over as a prop
  const studentAddress = {
    street: 'Street',
    number: 25,
  };

  const list = [
    {
      id: '11',
      name: 'Alexandru',
      lastName: 'Popescu',
      age: 18,
      scholarship: 'athletic',
      address: studentAddress,
      isStudent: true,
    },
    {
      id: '12',
      name: 'Maria',
      lastName: 'Stelian',
      age: 23,
      scholarship: '',
      address: studentAddress,
      isStudent: false,
    },
  ];

  return (
    <div id='student-list'>
      {list.map((student) => (
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