import { IonApp } from '@ionic/react';
import Routers from './router/router';
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const subLocation2 = useLocation()
  console.log('subLocation2', subLocation2)

  useEffect(() => {
    console.log('micro-sub-app2 useEffect')
    // 监听基座下发的数据变化
    const dataListener = (data: any) => {
      switch (data.type) {
        case 'switchTab':
          console.log('micro-sub-app2 switchTab')
          navigate(data.path)
          return
      }
    }
    (window as any).microApp && (window as any).microApp.addDataListener(dataListener)
  }, [])

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
