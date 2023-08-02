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
import VacationsPageController from './pages/vacations/VacationsPageController';
import PhonebookPage from './pages/phonebook/PhonebookPage';
import KindergartenPage from './pages/kindergarten/KindergartenPage';
import VacationApplicationsPage from './pages/vacationApplications/VacationApplicationsPage';
import DocumentPage from './pages/document/DocumentPage';

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
                <Layout style={{ minHeight: `calc(100dvh - ${appHeaderHeight + 3}px)`, background: colors.COLOR_BG_PRIMARY }}>
                  <Sidebar />
                  <Space $direction="vertical" style={{ minHeight: `calc(100dvh - ${appHeaderHeight + 3}px)` }}>
                    <PageHeader />
                    <PageContent>
                      <Routes>
                        <Route path={getRoute(RouteItem.PROFILE)} element={<ProfilePage />} />

                        <Route path={getRoute(RouteItem.VACATIONS)} element={<VacationsPageController />} />
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
                        <Route path={getRoute(RouteItem.KINDERGARTEN)} element={<KindergartenPage />} />
                        <Route path={getRoute(RouteItem.SANATORIUM)} element={<h1>Санаторий</h1>} />
                        <Route path={getRoute(RouteItem.VACATION_APPLICATIONS)} element={<VacationApplicationsPage />} />
                        <Route path={getRoute(RouteItem.ENQUIRY)} element={<h1>Справка</h1>} />
                        <Route path={getRoute(RouteItem.WORK_BOOK_COPY)} element={<h1>Копия</h1>} />

                        <Route path={getRoute(RouteItem.PHONEBOOK)} element={<PhonebookPage />} />

                        <Route path={getRoute(RouteItem.DOCUMENT)} element={<DocumentPage />} />

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
