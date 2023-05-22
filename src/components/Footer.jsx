import PropTypes from 'prop-types';
const Footer = ({ extraClass }) => {
  return (
    <div className={`text-center italic ${extraClass} py-2`}>
      Crafting digital experiences with passion and precision.
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  extraClass: PropTypes.string.isRequired,
};
