import './styles.scss';

type CardDetailProps = {
  humidity?: number;
  pressure?: number;
};

const CardDetail = ({ humidity, pressure }: CardDetailProps) => {
  return (
    <div className="container-detail">
      <h2>HUMITY</h2>
      <h2>PRESSURE</h2>
      <div>
        <span>{humidity}</span>
        {' %'}
      </div>
      <div>
        <span>{pressure}</span>
        {' hPa'}
      </div>
    </div>
  );
};

export default CardDetail;
