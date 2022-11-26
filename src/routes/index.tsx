import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { MainLayout } from 'layout/mainLayout';
import { GanttLib } from 'pages/GanttLib';
import { NotFound } from 'pages/NotFoundPage';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={ <MainLayout /> }
        >
          <Route
            element={<GanttLib />}
            index
          />
          <Route
            path="*"
            element={ <NotFound /> }
          />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
