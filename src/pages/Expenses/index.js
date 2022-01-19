import { useNavigate } from 'react-router-dom'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/react'
import {
  filterOutline,
  addOutline
} from 'ionicons/icons'
import './index.less'

const Index = () => {
  const navigate = useNavigate()
  return (
    <>
      <IonToolbar color="primary">
        <IonButtons slot="secondary" color='primary'>
          <IonButton  onClick={() => {navigate('/main/test')}}>
            Expenses
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary" color='primary'>
          <IonButton>
            <IonIcon slot="start" icon={filterOutline} />
          </IonButton>
          <IonButton>
            <IonIcon slot="start" icon={addOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle>我的费用</IonTitle>
      </IonToolbar>
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
        color='light'
      >
        <h1>Main Content</h1>
      </IonContent>
    </>
  )
}

export default Index