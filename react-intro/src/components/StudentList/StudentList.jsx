import Student from './../Student/Student';
import './StudentList.css';

const StudentList = () => {
  const studentAddress = {
    street: 'Street',
    number: 25,
  };

  return (
    <div id='student-list'>
      <Student
        name='Alexandru'
        lastName='Popescu'
        age={18}
        isStudent={true}
        address={studentAddress}
      ></Student>
      <Student
        name='Maria'
        lastName='Stelian'
        age={23}
        isStudent={false}
        address={studentAddress}
      ></Student>
    </div>
  );
};

export default StudentList;
