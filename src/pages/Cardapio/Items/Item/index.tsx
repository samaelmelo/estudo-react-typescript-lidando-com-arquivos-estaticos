import styles from './Item.module.scss';
import { TagsPrato } from 'components/TagsPrato/indes';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';


export default function Item(props: Prato){

  const navigate = useNavigate();
  const {title, description,photo, id} = props;

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
       
      </div>
    </div>
  );
}