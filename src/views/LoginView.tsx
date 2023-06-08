import { ReactElement, useState, useCallback } from 'react';
import { Col, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const login = 'user';
const password = 'aiE3V3kD02Pds$';

/**
 * Password input type.
 */
type PwdInputType = 'password' | 'text';

/**
 * Login view.
 *
 * @returns React component.
 */
const LoginView = (): ReactElement => {
  const { register, handleSubmit, formState: { isValid } } = useForm({mode: 'onChange'});
  const [pwdInputType, setPwdInputType] = useState<PwdInputType>('password');
  const nav = useNavigate();
  const pwdInputIconName = pwdInputType === 'password' ? 'eye-slash' : 'eye';
  const switchPwdInputType = () =>
    setPwdInputType(pwdInputType === 'password' ? 'text' : 'password');

  const processlogin = useCallback(() => {
    nav('/', {replace: true});
  }, [nav]);

  return (
    <Container
      fluid
      className={`text-bg-light ${styles.content}`}
    >
      <Row className={`text-center justify-content-center pb-5 pt-5`}>
        <Col xs={12} md={4} className={styles.col}>
          <h1 className='mb-4'>Вход в систему</h1>
          <Card style={{ width: '100%', height: '20rem', background: '#f2f2f2' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit(processlogin)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Введите имя пользователя</Form.Label>
                  <Form.Control type="login" placeholder="Enter email"
                  {...register("login", { required: true, validate: x => x === login })}
                  />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Label>Пароль</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Введите пароль"
                    type={pwdInputType}
                    {...register("password", { required: true, validate: x => x === password })}
                  />
                  <Button onClick={switchPwdInputType} variant="secondary">
                  <FontAwesomeIcon
                        size="1x"
                        icon={['fas', pwdInputIconName]}
                      />
                  </Button>
                </InputGroup>
                <Button className="mt-5" variant="primary" type="submit" disabled={!isValid}>
                  Логин
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
