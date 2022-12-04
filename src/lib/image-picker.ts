import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const requestCameraPermissions = async () => {
  if (Constants.platform.ios) {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("画像を選択するにはカメラロールの許可が必要です");
    }
  }
};

export const pickImage = async () => {
  // パーミッションを取得
  await requestCameraPermissions();
  // imagePicker起動
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
  });
  if (!result.canceled) {
    return result.assets[0].uri;
  }
};
