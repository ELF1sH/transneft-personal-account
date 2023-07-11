import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import Space from 'components/atoms/space/Space';
import PageHeader from 'components/organisms/pageHeader/PageHeader';
import Sidebar from 'components/organisms/sidebar/Sidebar';
import AppHeader from 'components/organisms/appHeader/AppHeader';
import PageContent from 'components/organisms/pageContentWrapper/PageContentWrapper';

import NotFoundPage from 'pages/notFound/NotFoundPage';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

const App: React.FC = () => (
  <>
    <AppHeader />
    <Layout style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)` }}>
      <Sidebar />
      <Space $direction="vertical">
        <PageHeader />
        <PageContent>
          <Routes>
            <Route path={getRoute(RouteItem.BASE)} element={<h1>Главная</h1>} />
            <Route path={getRoute(RouteItem.PROFILE)} element={<h1>Профиль</h1>} />

            <Route path={getRoute(RouteItem.VACATIONS)} element={<h1>Отпуска</h1>} />
            <Route path={getRoute(RouteItem.MEDICAL_CHECKUP)} element={<h1>Мед. осмотр</h1>} />
            <Route path={getRoute(RouteItem.EDUCATION)} element={<h1>Образование</h1>} />

            <Route path={getRoute(RouteItem.INVENTORY_CONTROL)} element={<h1>Складской учет</h1>} />

            <Route path={getRoute(RouteItem.WORKING_HOURS)} element={<h1>Режим работы</h1>} />
            <Route path={getRoute(RouteItem.WORKING_SCHEDULE)} element={<h1>Графики работы</h1>} />

            <Route path={getRoute(RouteItem.REDUCED_FARE)} element={<h1>Льготный проезд</h1>} />
            <Route path={getRoute(RouteItem.INCOME_TAX)} element={<h1>НДФЛ</h1>} />
            <Route path={getRoute(RouteItem.BIRTH_PENSION)} element={<h1>Пособие</h1>} />
            <Route path={getRoute(RouteItem.TAX_DEDUCTION)} element={<h1>Налоговый вычет</h1>} />
            <Route path={getRoute(RouteItem.RENTAL)} element={<h1>Аренда жилья</h1>} />
            <Route path={getRoute(RouteItem.KINDERGARTEN)} element={<h1>Детский сад</h1>} />
            <Route path={getRoute(RouteItem.SANATORIUM)} element={<h1>Санаторий</h1>} />
            <Route path={getRoute(RouteItem.VACATION_APPLICATIONS)} element={<h1>Заявления</h1>} />
            <Route path={getRoute(RouteItem.ENQUIRY)} element={<h1>Справка</h1>} />
            <Route path={getRoute(RouteItem.WORK_BOOK_COPY)} element={<h1>Копия</h1>} />

            <Route path={getRoute(RouteItem.PHONEBOOK)} element={<h1>Телефон</h1>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageContent>
      </Space>
    </Layout>
  </>
);

export default App;
