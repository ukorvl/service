import { ReactElement, useState, useRef, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useForm, ValidationError } from '@formspree/react';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import styles from './ScheduleCallCard.module.scss';

/**
 * Schedule call card.
 *
 * @returns React component.
 */
export const ScheduleCallCard = (): ReactElement => {
  const [showInput, setShowInput] = useState(false);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = showInput ? goodbyeRef : helloRef;
  const {
    t,
    i18n: { language },
  } = useTranslation('main');

  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_FORM_ID!);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    state.succeeded && setShowInput(false);
  }, [state.succeeded]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={showInput ? 'Input' : 'Hello, world!'}
        nodeRef={nodeRef}
        timeout={400}
        classNames="fade"
      >
        <Card
          ref={nodeRef}
          className={`${styles.card} text-bg-light`}
        >
          <Card.Body className="text-center">
            {showInput ? (
              <>
                <Card.Title>
                  <h5>Введите номер телефона</h5>
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={language === 'en-US' ? 'Phone number' : 'Номер телефона'}
                    className="mt-4"
                  >
                    <Form.Control
                      type="tel"
                      placeholder="+7-999-999-99-99"
                      name="phone"
                      value={phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    />
                  </FloatingLabel>
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="text-danger"
                  />
                  <div className="d-flex justify-content-center mt-5">
                    <Button
                      variant="dark"
                      className="mb-5"
                      disabled={state.submitting || !phone}
                      type="submit"
                    >
                      {language === 'en-US' ? 'Submit' : 'Отправить'}
                      {state.submitting && <Spinner />}
                    </Button>
                  </div>
                </Form>
              </>
            ) : (
              <>
                <Card.Title>
                  <h5>{t('mission.pictureHeadText')}</h5>
                </Card.Title>
                <Card.Text>{t('mission.pictureText')}</Card.Text>
                <Button
                  variant="dark"
                  onClick={() => setShowInput(true)}
                >
                  {t('mission.buttonText')}
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </CSSTransition>
    </SwitchTransition>
  );
};
