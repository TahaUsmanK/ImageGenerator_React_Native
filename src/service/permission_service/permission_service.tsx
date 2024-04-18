import {PermissionsAndroid, Platform} from 'react-native';

const PermissionService = async (downloadImage: () => void) => {
  if (Platform.OS === 'ios') {
    downloadImage();
  } else if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadImage();
        console.log('Permission Granted');
      } else {
        console.log('Permission Denied');
      }
    } catch (e) {
      console.log(e);
    }
  }
};

export default PermissionService;
