import Store from "../Store/Store";
import "../StoreList/Storelist.css"
import amazon from '../../assets/icons8-amazon-100.png';
import facebook from '../../assets/icons8-facebook-100.svg'
import google from '../../assets/icons8-google-100.svg'
import yahoo from '../../assets/icons8-yahoo-100.svg'

const StoreList = () => {
  return (
    <main>
      <Store
        logo={amazon}
        name='Amazon.com Inc.'
        adress='410 Terry Ave. N, Seattle, WA 98109'
        schedule='24/7'
      ></Store>

      <Store
        logo={facebook}
        name='Facebook'
        adress='Menlo Park, California'
        schedule='24/7'
      ></Store>

      <Store
        logo={google}
        name='Google'
        adress='Bulevardul Corneliu Coposu 6-8, București 030167'
        schedule='24/7'
      ></Store>


      <Store
        logo={yahoo}
        name='Yahoo'
        adress='1020 Hull St.,3rd Fl. Baltimore, MD 21230'
        schedule='24/7'
      ></Store>


    </main>
  )
}

export default StoreList