import './Store.css'

const Store = ({ name, adress, logo, schedule }) => {

  return (
    <>
      <div className="store-detail">
        <img src={logo} alt="" />
        <div className='store-name'>{name}</div>
        <div className='store-adress'>
          {adress}
        </div>
        <div className="store-timming">
          Bussiness hours: <strong style={{ color: "#ff4500", paddingLeft: "10px" }}>{schedule}</strong>
        </div>
      </div >
    </>

  )
}

export default Store