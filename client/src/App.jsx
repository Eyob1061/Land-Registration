import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';

// Auth Provider
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Layout
import MainLayout from './components/layout/MainLayout';

// Auth Components
import LoginPage from './components/auth/LoginPage';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import ChangePassword from './components/auth/ChangePassword';
import SecureAdminLogin from './components/auth/SecureAdminLogin';

// Admin Components
import AdminDashboard from './components/admin/Dashboard';
import GenerateReport from './components/admin/GenerateReport';
import ManageUsers from './components/admin/ManageUsers';

// Registration Office Components
import RegistrationDashboard from './components/registration/RegistrationDashboard';
import CertificationForm from './components/registration/CertificationForm';
import ParcelManagement from './components/parcel/ParcelManagement';
import LandOwnerManagement from './components/registration/LandOwnerManagement';
import CertificateVerification from './components/registration/CertificateVerification';
import CertificateHistory from './components/registration/CertificateHistory';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/login/registration" replace />} />
          <Route path="/login/registration" element={<LoginPage userType="registration" />} />
          <Route path="/login/admin" element={<LoginPage userType="admin" />} />
          <Route path="/secure-admin" element={<SecureAdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
            
          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <MainLayout userType="admin" />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="reports" element={<GenerateReport />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          {/* Registration Office routes */}
          <Route
            path="/registration"
            element={
              <ProtectedRoute allowedRoles={['registration']}>
                <MainLayout userType="registration" />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<RegistrationDashboard />} />
            <Route path="new-certification" element={<CertificationForm />} />
            <Route path="parcels" element={<ParcelManagement />} />
            <Route path="land-owners" element={<LandOwnerManagement />} />
            <Route path="verify-certificate" element={<CertificateVerification />} />
            <Route path="certificate-history" element={<CertificateHistory />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
