import { Routes, Route } from 'react-router-dom'
import Main from '@/pages/main'
import MissingPage from '@/pages/missing-page'

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
};

export default RouterProvider