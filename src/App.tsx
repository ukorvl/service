import { ReactElement, ReactNode, Suspense, useState } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
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
          <RouteProptect>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ))}
            </Routes>
          </RouteProptect>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}

export default App;

function RouteProptect({ children }: { children: ReactNode }) {
  const [isLogged, setisLogged] = useState(false);
  return (<>{children}</>);
}
