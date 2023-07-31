import React, { useState } from 'react';

import { Spin } from 'components/atoms/spin/Spin';

const PhonebookPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spin size="large" />}
      <iframe
        title="Телефонный справочник"
        src={process.env.REACT_APP_PHONEBOOK_URL}
        style={{ width: '100%', height: '700px', display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default PhonebookPage;
