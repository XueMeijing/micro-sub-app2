import { IonApp } from '@ionic/react';
import Routers from './router/router';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    // 监听基座下发的数据变化
    const dataListener = (data: any) => {
      const { type, data: receivedData } = data
      switch (type) {
        case 'micro-app-react':
          navigate(receivedData.path)
          return
      }

    }
    (window as any).microApp && (window as any).microApp.addGlobalDataListener(dataListener, true)
  }, [])
  return (
    <div className="App">
      microReact
    </div>
  );
}

export default App;
