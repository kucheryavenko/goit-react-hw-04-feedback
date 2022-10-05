import PropTypes from 'prop-types';
import { TitleSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <TitleSection>{title}</TitleSection>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
