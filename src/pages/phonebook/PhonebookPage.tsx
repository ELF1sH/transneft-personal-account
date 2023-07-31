import React from 'react';

const PhonebookPage: React.FC = () => (
  <iframe
    title="Телефонный справочник"
    src={process.env.REACT_APP_PHONEBOOK_URL}
    style={{ width: 'calc(100%)', height: '700px' }}
  />
);

export default PhonebookPage;
