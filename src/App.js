import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layout/DefaultLayout';
import ContainerView from './pages/ContainerView';
import ContainerFAQView from './pages/ContainerFAQView';
import SystemView from './pages/SystemView';
import SystemFAQView from './pages/SystemFAQView';
import ApplicationView from './pages/ApplicationView';
import ApplicationFAQView from './pages/ApplicationFAQView';
import WebServerView from './pages/WebServerView';
import WebServerFAQView from './pages/WebServerFAQView';
import HowReport from './pages/HowReport';
import DataPrivacy from './pages/DataPrivacy';
import SampleReport from './pages/SampleReport';
import FAQ from './pages/FAQView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<DefaultLayout />}>
          <Route path="/container" element={<ContainerView />} />
          <Route path="/container-help" element={<ContainerFAQView />} />

          <Route path="/system" element={<SystemView />} />
          <Route path="/system-help" element={<SystemFAQView />} />

          <Route path="/application" element={<ApplicationView />} />
          <Route path="/application-help" element={<ApplicationFAQView />} />

          <Route path="/webserver" element={<WebServerView />} />
          <Route path="/webserver-help" element={<WebServerFAQView />} />

          <Route path="/sample-report" element={<SampleReport />} />
          <Route path="/how-report" element={<HowReport />} />

          <Route path="/data-privacy" element={<DataPrivacy />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
