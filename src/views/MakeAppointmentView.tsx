import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Row, Col, Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

/**
 * About view.
 *
 * @returns React component.
 */
const MakeAppointmentView = (): ReactElement => {
  const {
    i18n: { language },
  } = useTranslation('about');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_FORM_ID!);
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <>
      <Helmet>
        <title>{language === 'en-US' ? 'Make appointment' : 'Назначить встречу'}</title>
      </Helmet>
      <PageLayout title={language === 'en-US' ? 'Make appointment' : 'Назначить встречу'}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={6}
          >
            <Form onSubmit={handleSubmit}>
              <div className="mb-5">
                <FloatingLabel
                  controlId="floatingInput"
                  label={language === 'en-US' ? 'Email' : 'Электронная почта'}
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-danger"
                />
              </div>
              <div className="mb-5">
                <FloatingLabel
                  controlId="floatingInput"
                  label={language === 'en-US' ? 'Message' : 'Сообщение'}
                >
                  <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    type="text"
                    placeholder="message"
                    name="message"
                    value={msg}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)}
                  />
                </FloatingLabel>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-danger"
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="secondary"
                  className="mb-5"
                  size="lg"
                  disabled={state.submitting || !msg || !email}
                  type="submit"
                >
                  {language === 'en-US' ? 'Submit' : 'Отправить'}
                  {state.submitting && <Spinner />}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default MakeAppointmentView;
