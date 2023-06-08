import { ReactElement, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Spinner from 'react-bootstrap/Spinner';
import { Layout } from './components';
import { routes } from './routing';

const baseDocumentTitle = process.env.REACT_APP_SITE_DEFAULT_TITLE;

/**
 * App.
 *
 * @returns React component.
 */
function App(): ReactElement {
  return (
    <HashRouter>
      <Helmet
        titleTemplate={`${baseDocumentTitle} - %s`}
        defaultTitle={baseDocumentTitle}
      />
      <Layout>
        <Suspense
          fallback={
            <Spinner
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        >
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}

export default App;
