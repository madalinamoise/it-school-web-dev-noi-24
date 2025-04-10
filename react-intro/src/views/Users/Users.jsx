import { useState, useEffect } from 'react';
import Header from '../../common/Header/Header';

export default function Users() {
  const [showHeader, setShowHeader] = useState(true);
  const [isCapHeader, setCapHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader((prev) => !prev);
    }, [5000]);
  });

  useEffect(() => {
    console.log('empty array dep');

    const timeout = setTimeout(() => {
      setCapHeader((prev) => !prev);
    }, [1700]);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showHeader && (
        <Header title='New app title' isCapHeader={isCapHeader}></Header>
      )}
      <div className='test-class'>Dummy text 2</div>
    </>
  );
}
