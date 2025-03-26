import { View, Image } from 'react-native';
const testIcon = require('../../assets/images/icon.png');

export function AssetTest() {
  console.log('Asset path:', testIcon);
  return (
    <View>
      <Image source={testIcon} style={{ width: 100, height: 100 }} />
    </View>
  );
}
