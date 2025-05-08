import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function App() {
  return (
    
    <div style={{ width:'100vw', height:'100vh' }}>
      {/* 
        This super smart component serves as a drop-in chat solution
        
        For advanced 🚀 customizations, use SendbirdProvider:
        https://sendbird.com/docs/chat/uikit/v3/react/essentials/sendbirdprovider
      */}
      <SendbirdApp
        appId={'4E26DC08-4FDC-415E-B8E4-3F45CD24FC43'}
        userId={'user3'}
        accessToken={'ff43a32bc04767ad2d619129c4b8f0a0fbd7306c'} // Optional, but recommended
      />
    </div>
  )
}

export default App;