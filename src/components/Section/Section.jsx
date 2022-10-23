import { SectionStyled } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      <div>{children}</div>
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
