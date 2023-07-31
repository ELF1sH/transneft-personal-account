import React from 'react';

import DocumentsTable from 'components/molecules/documentsTable/DocumentsTable';

import { dataSource } from './dataSource';

const KindergartenPage: React.FC = () => (
  <DocumentsTable
    dataSource={dataSource}
  />
);

export default KindergartenPage;
