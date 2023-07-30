/* eslint max-len: 0 */
import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { colors } from 'theme/colors';

import Space from 'components/atoms/space/Space';
import DrawerSidebar from 'components/organisms/sidebar/drawerSidebar/DrawerSidebar';
import PageHeader from 'components/organisms/pageHeader/PageHeader';
import Sidebar from 'components/organisms/sidebar/Sidebar';
import AppHeader from 'components/organisms/appHeader/AppHeader';
import PageContent from 'components/wrappers/pageContentWrapper/PageContentWrapper';

import AuthPage from 'pages/auth/AuthPage';
import VacationsPageProvider from 'pages/vacations/VacationsPageProvider';
import NotFoundPage from 'pages/notFound/NotFoundPage';

import { useAppHeaderHeight } from 'utils/hooks/layout/useAppHeaderHeight';
import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

import UserProvider from './modules/providers/userProvider/UserProvider';
import ProfilePage from './pages/profile/ProfilePageView';
import QrPage from './pages/qr/QrPage';
import MedicalCheckupPageController from './pages/medicalCheckup/MedicalCheckupPageController';
import EducationPageController from './pages/education/EducationPageController';
import InventoryControlPageController from './pages/inventoryControl/InventoryControlPageController';
import WorkingHoursPageController from './pages/workingHours/WorkingHoursPageController';
import WorkingScheduleController from './pages/workingSchedule/WorkingScheduleController';

const App: React.FC = () => {
  const { appHeaderHeight } = useAppHeaderHeight();

  return (
    <>
      <Routes>
        <Route path={getRoute(RouteItem.BASE)} element={<AuthPage />} />
        <Route path={getRoute(RouteItem.QR)} element={<QrPage />} />
        <Route
          path="*"
          element={(
            <>
              <UserProvider>
                <DrawerSidebar />
                <AppHeader />
                <Layout style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)`, background: colors.COLOR_BG_PRIMARY }}>
                  <Sidebar />
                  <Space $direction="vertical" style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)` }}>
                    <PageHeader />
                    <PageContent>
                      <Routes>
                        <Route path={getRoute(RouteItem.PROFILE)} element={<ProfilePage />} />

                        <Route path={getRoute(RouteItem.VACATIONS)} element={<VacationsPageProvider />} />
                        <Route path={getRoute(RouteItem.MEDICAL_CHECKUP)} element={<MedicalCheckupPageController />} />
                        <Route path={getRoute(RouteItem.EDUCATION)} element={<EducationPageController />} />

                        <Route path={getRoute(RouteItem.INVENTORY_CONTROL)} element={<InventoryControlPageController />} />

                        <Route path={getRoute(RouteItem.WORKING_HOURS)} element={<WorkingHoursPageController />} />
                        <Route path={getRoute(RouteItem.WORKING_SCHEDULE)} element={<WorkingScheduleController />} />

                        <Route path={getRoute(RouteItem.REDUCED_FARE)} element={<h1>Льготный проезд</h1>} />
                        <Route path={getRoute(RouteItem.INCOME_TAX)} element={<h1>НДФЛ</h1>} />
                        <Route path={getRoute(RouteItem.BIRTH_PENSION)} element={<h1>Пособие</h1>} />
                        <Route path={getRoute(RouteItem.TAX_DEDUCTION)} element={<h1>Налоговый вычет</h1>} />
                        <Route path={getRoute(RouteItem.RENTAL)} element={<h1>Аренда жилья</h1>} />
                        <Route path={getRoute(RouteItem.KINDERGARTEN)} element={<h1>Детский сад</h1>} />
                        <Route path={getRoute(RouteItem.SANATORIUM)} element={<h1>Санаторий</h1>} />
                        <Route path={getRoute(RouteItem.VACATION_APPLICATIONS)} element={<h1>Заявление</h1>} />
                        <Route path={getRoute(RouteItem.ENQUIRY)} element={<h1>Справка</h1>} />
                        <Route path={getRoute(RouteItem.WORK_BOOK_COPY)} element={<h1>Копия</h1>} />

                        <Route path={getRoute(RouteItem.PHONEBOOK)} element={<h1>Телефон</h1>} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </PageContent>
                  </Space>
                </Layout>
              </UserProvider>
            </>
            )}
        />
      </Routes>
    </>
  );
};

export default App;
