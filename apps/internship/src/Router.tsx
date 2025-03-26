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
} from "./pages";
import { Layout } from "./components/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/admin/job-status" element={<JobStatus />} />
          <Route path="/user/submitted" element={<Submitted />} />
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
