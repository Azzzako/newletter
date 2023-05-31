import './App.css'
import imgForm from './assets/images/desktop.svg'


function App() {

  return (
    <>
      <section className='container_gral'>

        <div className='container'>

          <div className='form'>
            <div className='form_entry'>
              <h1>Stay updated!</h1>
              <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
            </div>

            <div className='img_container'>
              <img src={imgForm} alt='form'/>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
