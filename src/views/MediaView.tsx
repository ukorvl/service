import { ReactElement } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AppearOnScreen } from '../components/AppearOnScreen';
import { PageLayout } from '../components/PageLayout';
import styles from './styles/media.module.scss';

/**
 * Media view.
 *
 * @returns React component.
 */
const MediaView = (): ReactElement => {
  const {
    t,
    i18n: { language },
  } = useTranslation('media');

  return (
    <>
      <Helmet>
        <title>{language === 'en-US' ? 'Media' : 'Медиа'}</title>
      </Helmet>
      <PageLayout title={t('title') ?? undefined}>
        <Row className="justify-content-center mb-5">
          <Col
            xs={12}
            md={8}
          >
            <Row className="justify-content-center">
              {mediaConfig.map(x => (
                <Col
                  xs={12}
                  md={6}
                  key={x.link}
                >
                  <AppearOnScreen<HTMLDivElement> animation="fade">
                    {({ ref }) => (
                      <Card
                        ref={ref}
                        className={styles.card}
                      >
                        <Card.Img
                          className={styles.img}
                          variant="top"
                          src={x.image}
                        />
                        <Card.Body>
                          <Card.Title
                            as="h5"
                            className="mb-2"
                          >
                            {x.title}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{x.date}</Card.Subtitle>
                          <Card.Text>{x.text}</Card.Text>
                          <Card.Link href={x.link}>
                            {language === 'en-US' ? 'Read on the site' : 'Читать на сайте'}
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    )}
                  </AppearOnScreen>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default MediaView;

const rbkImage = `${process.env.PUBLIC_URL}/images/rbk.jpg`;
const bankiRuImage = `${process.env.PUBLIC_URL}/images/Banki.ru.png`;

const mediaConfig = [
  {
    image: bankiRuImage,
    text: '2022 год завершился для российской экономики лучше ожиданий правительства — это объясняется ростом расходов госсектора и вкладом нефтегазового сектора, рассказывают «Ведомости». ВВП России в абсолютном выражении составил 151,5 трлн рублей в текущих ценах.',
    title: 'Как упала экономика и кто похитил из банков 10 млрд. Обзор прессы 21 февраля',
    date: '21.02.2023',
    link: 'https://www.banki.ru/news/lenta/main/?id=10980620',
  },
  {
    image: rbkImage,
    text: 'Московская биржа планирует применить новый подход для определения весов акций в своем основном индикаторе — индексе IMOEX. Новые базы расчета индексов акций с расчетными весами будут опубликованы 1 марта 2023 года.',
    title: 'Индекс Мосбиржи может быть пересчитан по данным о доступности акций',
    date: '20.02.2023',
    link: 'https://quote.rbc.ru/news/article/63f397ae9a79470bae2e1d54',
  },
  {
    image: rbkImage,
    text: 'Наверное, все, кто читает финансовые новости и интересуется инвестициями, встречали такие понятия, как активы и пассивы. Иногда может возникать некоторая путаница в понимании их значений. Разъясняем, что это такое.',
    title: 'Что такое активы и пассивы и как правильно их применять: разбор',
    date: '20.02.2023',
    link: 'https://quote.rbc.ru/news/article/63e60e5d9a7947056615a6ee',
  },
  {
    image: rbkImage,
    text: 'Доходность казначейских облигаций со сроком погашения через шесть месяцев впервые с 2007 года превысила 5%, поскольку срок их погашения выпадает примерно на то время, когда в США потенциально может случиться дефолт.',
    title: 'Доходность облигаций США взлетела до максимума с 2007 года',
    date: '20.02.2023',
    link: 'https://quote.rbc.ru/news/article/63f349219a7947e2a1711b03',
  },
  {
    image: bankiRuImage,
    text: 'Банк России расширил перечень валют, которыми форекс-дилеры могут оперировать для заключения сделок с клиентами. Новый список приводится в базовом стандарте для форекс-дилеров, который утвердил регулятор.',
    title: 'ЦБ расширил список валют для сделок форекс-дилеров',
    date: '20.02.2023',
    link: 'https://www.banki.ru/news/lenta/?id=10980613',
  },
];
