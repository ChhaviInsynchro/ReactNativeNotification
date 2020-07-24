import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },// (required) Called when a remote or local notification is opened or received
     
      onNotification: function(notification) {
        try{
        console.log('REMOTE NOTIFICATION ==>', notification)// process the notification here
        }catch(err){
          console.log("Notification error:" +err);
        }
      },
      // Android only: GCM or FCM Sender ID
      senderID: '99849394856',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])
  return null
}

export default RemotePushController