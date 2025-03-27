import Button from '../Button/Button';

const Student = ({ name, lastName, age, isStudent, address }) => {
  const handleOnButtonClick = () => {
    console.log('button in student');
  };

  return (
    <div style={{ backgroundColor: isStudent ? '#83c5be' : '#edf6f9' }}>
      <div>
        {name} {lastName}
      </div>
      <div>Age: {age}</div>
      <div>Student: {isStudent ? 'DA' : 'NU'}</div>
      <div>
        Address: {address.street}, {address.number}
      </div>
      <Button label='Enroll' onButtonClick={handleOnButtonClick}></Button>
    </div>
  );
};

export default Student;
