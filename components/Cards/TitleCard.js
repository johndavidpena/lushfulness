import CardStyles from '../../stylesheets/Cards.module.css';

const TitleCard = ({ title }) => {
  return (
    <div className={CardStyles.container}>
      <h3>{title}</h3>
    </div>
  );
}

export default TitleCard;
