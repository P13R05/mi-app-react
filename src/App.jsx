import { Toaster } from "./components/ui/toaster";
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // Importación estándar
import { pagesConfig } from './pages.config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

// 1. Crea un QueryClient nuevo aquí mismo para no depender de archivos externos eliminados
const queryClient = new QueryClient();

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper currentPageName="Home"><MainPage /></LayoutWrapper>} />
      <Route path="/servicios" element={<LayoutWrapper currentPageName="Servicios">{Pages.Services ? <Pages.Services /> : <PageNotFound />}</LayoutWrapper>} />
      <Route path="/proyectos" element={<LayoutWrapper currentPageName="Proyectos">{Pages.Projects ? <Pages.Projects /> : <PageNotFound />}</LayoutWrapper>} />
      <Route path="/contacto" element={<LayoutWrapper currentPageName="Contact">{Pages.Contact ? <Pages.Contact /> : <PageNotFound />}</LayoutWrapper>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    // 2. Usamos el nuevo queryClient que creamos arriba
    <QueryClientProvider client={queryClient}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AuthenticatedApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App;