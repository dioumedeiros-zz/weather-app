import Loader from '../../assets/loader.svg';

import './styles.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img src={Loader} alt="Animação do carregando" />
    </div>
  );
};

export default Loading;
