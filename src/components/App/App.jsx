import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container, Card, Title } from 'components/App/App.styled';

export const App = () => {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = propertyName => {
    switch (propertyName) {
      case 'good':
        return setGoog(prevGood => prevGood + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return;
    }
    const value = good;
    const result = (value / total) * 100;
    return Number(Math.ceil(result));
  };

  const options = { good, neutral, bad };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Card>
        <Title>Cafe Expresso</Title>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statics'}>
          {!total ? (
            <Notification message={'There is no feedback :('} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage ? positivePercentage : 0}
            />
          )}
        </Section>
      </Card>
    </Container>
  );
};
