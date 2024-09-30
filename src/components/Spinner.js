import loading from './load.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} style={{width: "70px"}} alt="loading" />
      </div>
    )
  }
export default Spinner;