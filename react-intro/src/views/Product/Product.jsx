import { useParams } from 'react-router';
import Header from '../../common/Header/Header';

//HW: fetch one product and make your own design
export default function Product() {
  let { id } = useParams();

  console.log(id);
  return <Header title={`Product ${id}`} />;
}
