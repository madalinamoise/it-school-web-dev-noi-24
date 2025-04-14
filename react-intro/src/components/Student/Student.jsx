import { scholarships } from '../../types/consts';
import Button from '../../common/Button/Button';

const Student = ({ name, lastName, age, isStudent, address, scholarship }) => {
  const handleOnButtonClick = () => {
    console.log('button in student');
  };

  //if used only in JS code
  const displayIsStudent = () => {
    // if (isStudent) {
    //   return <h3>DA</h3>;
    // } else {ß
    //   return <h3>Nu</h3>;
    // }

    if (!isStudent) {
      return <h3>NU</h3>;
    }
    return <h3>DA</h3>;

    // return isStudent ? <h3>'DA'</h3> : <h3>'NU'</h3>;
  };

  return (
    <div style={{ backgroundColor: isStudent ? '#83c5be' : '#edf6f9' }}>
      <div>
        {name} {lastName}
      </div>
      <div>Age: {age}</div>

      <div>Student: {displayIsStudent()}</div>
      {/* folosim || cand vrem un default fallback value */}
      <div>Scholarship: {scholarships[scholarship] || 'none'}</div>
      <div>
        Address: {address.street}, {address.number}
      </div>
      {!isStudent && (
        <Button
          label='Enroll'
          onClick={handleOnButtonClick}
          hasCount={true}
        ></Button>
      )}
    </div>
  );
};

export default Student;