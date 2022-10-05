import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container, Card, Title } from 'components/App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return;
    }
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(Math.ceil(result));
  }

  onLeaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Card>
          <Title>Cafe Expresso</Title>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title={'Statics'}>
            {!total ? (
              <Notification message={'There is no feedback'} />
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
  }
}
