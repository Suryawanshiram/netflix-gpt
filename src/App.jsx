
import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux';   
import appStore from './utils/appStore';

function App() {
  

  return (
    <>
      <div className=''>
        <Provider store={appStore}>
            <Body/>
        </Provider>
      </div>
     
    </>
  )
}

export default App


// https://github.com/akshaymarch7/netflix-gpt/blob/main/src/components/Login.js"https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
