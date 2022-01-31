import './styles.scss';

type CardErrorProps = {
  onClick: () => void;
};

const CardError = ({ onClick }: CardErrorProps) => {
  return (
    <section>
      <p className="card__error">Something went wrong</p>
      <button className="card__button-error" onClick={onClick}>
        Try again
      </button>
    </section>
  );
};

export default CardError;
