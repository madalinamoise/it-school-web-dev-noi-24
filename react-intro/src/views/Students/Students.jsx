import StudentList from '../../components/StudentList/StudentList';
import Header from '../../common/Header/Header';

export default function Students() {
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
    <>
      <Header title='Students'></Header>
      <StudentList studentList={list} />
    </>
  );
}
