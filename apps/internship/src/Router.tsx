import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  JobStatus,
  Main,
  Submitted,
  Completed,
  ApplicationWriting,
  CreateSupport,
  EditSupport,
  Edited,
  ApplicationStatus,
  ApplicantDashboard,
} from "./pages";
import { Layout } from "./components/Layout";
import { DetailPost } from "./pages/DetailPost";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/post/:id" element={<DetailPost />} />
          <Route path="/job-status" element={<JobStatus />} />
          <Route path="/support-status" element={<ApplicationStatus />} />
          <Route path="/support/:id" element={<ApplicantDashboard />} />
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/application-writing" element={<ApplicationWriting />} />
          <Route path="/create-support" element={<CreateSupport />} />
          <Route path="/edit-support/:noticeId" element={<EditSupport />} />
          <Route path="/edited" element={<Edited />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
