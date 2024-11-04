import * as Notification from "expo-notifications"

Notification.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    })
  })


export const pushNotification = async () => {
    await Notification.scheduleNotificationAsync({
      content: {
        title: 'ola mundo',
        body: "Notificado com sucesso",
      },
      trigger: null
    });
  };