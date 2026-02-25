import { Route, Routes } from "react-router-dom";

import Index from "@/pages/index";
import CreativesPage from "@/pages/CreativesPage";
import FinancialInstitutionsPage from "@/pages/FinancialInstitutionsPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import WaitlistPage from "@/pages/WaitlistPage";
import PricingPage from "@/pages/PricingPage";
import CareersPage from "@/pages/CareersPage";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { CMSProvider } from "@/admin/context/CMSContext";
import { AdminLayout } from "@/admin/AdminLayout";
import { SignUpPage } from "@/admin/pages/SignUpPage";
import { LoginPage } from "@/admin/pages/LoginPage";
import { DashboardOverview } from "@/admin/pages/DashboardOverview";
import { ArticlesPage } from "@/admin/pages/ArticlesPage";
import { ArticleEditorPage } from "@/admin/pages/ArticleEditorPage";
import { SessionsPage } from "@/admin/pages/SessionsPage";
import { WaitlistPage as AdminWaitlistPage } from "@/admin/pages/WaitlistPage";
import { DemoBookingsPage } from "@/admin/pages/DemoBookingsPage";
import { WorkingWithUsPage } from "@/admin/pages/WorkingWithUsPage";
import { ContactsPage } from "@/admin/pages/ContactsPage";
import { NewsletterPage } from "@/admin/pages/NewsletterPage";
import { JobListingsPage } from "@/admin/pages/JobListingsPage";
import { JobDetailPage } from "@/admin/pages/JobDetailPage";
import { JobEditorPage } from "@/admin/pages/JobEditorPage";
import { TalentPoolPage } from "@/admin/pages/TalentPoolPage";
import { SettingsPage } from "@/admin/pages/SettingsPage";
import { LogoutPage } from "@/admin/pages/LogoutPage";
import { PublicContentProvider } from "@/context/PublicContentContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";


export default function App() {
  return (
    <>
      <PublicContentProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creatives" element={<CreativesPage />} />
          <Route path="/financial-institutions" element={<FinancialInstitutionsPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/careers" element={<CareersPage />} />

          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route element={<CMSProvider><AdminLayout /></CMSProvider>}>
              <Route index element={<DashboardOverview />} />
              <Route path="articles" element={<ArticlesPage />} />
              <Route path="articles/new" element={<ArticleEditorPage />} />
              <Route path="articles/:id" element={<ArticleEditorPage />} />
              <Route path="sessions" element={<SessionsPage />} />
              <Route path="waitlist" element={<AdminWaitlistPage />} />
              <Route path="demo-bookings" element={<DemoBookingsPage />} />
              <Route path="working-with-us" element={<WorkingWithUsPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="newsletter" element={<NewsletterPage />} />
              <Route path="jobs" element={<JobListingsPage />} />
              <Route path="jobs/new" element={<JobEditorPage />} />
              <Route path="jobs/:id" element={<JobDetailPage />} />
              <Route path="jobs/:id/edit" element={<JobEditorPage />} />
              <Route path="talent-pool" element={<TalentPoolPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="logout" element={<LogoutPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </PublicContentProvider>
      <Toaster />
    </>
  );
}
