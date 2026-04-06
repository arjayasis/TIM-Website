import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Preloader from '@/components/shared/Preloader';
import { motion, AnimatePresence } from 'motion/react';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : () => <></>;

const LayoutWrapper = ({ children, currentPageName }: { children: React.ReactNode, currentPageName: string }) => {
  const LayoutComp = Layout as any;
  return LayoutComp ?
    <LayoutComp currentPageName={currentPageName}>{children}</LayoutComp>
    : <>{children}</>;
};

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth() as any;

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper currentPageName={mainPageKey}>
          <MainPage />
        </LayoutWrapper>
      } />
      {Object.entries(Pages).map(([path, Page]) => {
        const PageComp = Page as React.ComponentType;
        const RouteComp = Route as any;
        return (
          <RouteComp
            key={path}
            path={path}
            element={
              <LayoutWrapper currentPageName={path}>
                <PageComp />
              </LayoutWrapper>
            }
          />
        );
      })}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    // Only show preloader if we are on the home page (root path)
    return window.location.pathname === '/' || window.location.pathname === '/AboutUs';
  });

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <AnimatePresence mode="wait">
          {showPreloader ? (
            <Preloader onComplete={() => setShowPreloader(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="min-h-screen"
            >
              <Router>
                <NavigationTracker />
                <AuthenticatedApp />
              </Router>
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
