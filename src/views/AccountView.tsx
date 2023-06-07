import { ReactElement } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Path } from '../routing';

/**
 * Main view.
 *
 * @returns React component.
 */
const MainView = (): ReactElement => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <Container fluid>
      <Helmet>
        <title>{language === 'en-US' ? 'Account' : 'Личный кабинет'}</title>
      </Helmet>
      <Row className="justify-content-center mt-5">
        <Col
          xs={12}
          md={6}
        >
          <h1 className="text-danger text-center mb-5">
            {language === 'en-US' ? 'Login' : 'Вход в личный кабинет'}
          </h1>
          <FloatingLabel
            controlId="floatingInput"
            label={language === 'en-US' ? 'Login' : 'Введите логин'}
            className="mb-5"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label={language === 'en-US' ? 'Password' : 'Введите пароль'}
            className="mb-5"
          >
            <Form.Control
              type="password"
              placeholder="password"
            />
          </FloatingLabel>
          <div className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="mb-5"
              size="lg"
            >
              {language === 'en-US' ? 'Login' : 'Логин'}
            </Button>
          </div>
        </Col>
      </Row>
      <h5 className="mb-5 text-center">
        <Link to={Path.root}>
          {language === 'en-US' ? 'Back to main page' : 'Вернуться на главную'}
        </Link>
      </h5>
    </Container>
  );
};

export default MainView;
