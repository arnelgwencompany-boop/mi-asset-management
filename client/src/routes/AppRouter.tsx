import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import LoginPage from '../features/auth/pages/LoginPage'
import DashboardPage from '../features/dashboard/pages/DashboardPage'

const Placeholder = ({ title }: { title: string }) => (
  <h1 className="text-2xl font-bold">{title}</h1>
)

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assets" element={<Placeholder title="Assets" />} />
          <Route path="/employees" element={<Placeholder title="Employees" />} />
          <Route path="/reports" element={<Placeholder title="Reports" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}