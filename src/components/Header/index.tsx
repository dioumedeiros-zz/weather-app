import Logo from '../../assets/logo.svg';

import './styles.scss';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo com a descrição Weather now" />
    </header>
  );
};

export default Header;
