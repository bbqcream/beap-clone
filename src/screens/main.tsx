import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Main = () => {
  const [attend, setAttend] = useState(false);
  const handleAttend = () => {
    setAttend(!attend);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.topNav}>
            <TouchableOpacity>
              <Image
                style={styles.logoImg}
                source={require('../assets/beep.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.infoImg}
                source={require('../assets/info.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.checkWrap}>
            <Text style={styles.title}>출석체크</Text>
            <View style={styles.checkStatWrap}>
              <Image
                source={
                  attend
                    ? require('../assets/zzz.gif')
                    : require('../assets/smile.png')
                }
                style={attend ? styles.smile : styles.zzz}
              />
              <Image
                source={require('../assets/phone.png')}
                style={styles.phone}
              />
              <TouchableOpacity
                onPress={() => handleAttend()}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  paddingVertical: height * 0.02,
                  borderRadius: 5,
                  backgroundColor: attend ? '#32A89C' : '#FF6C6C',
                }}>
                <Text style={styles.checkText}>
                  {attend ? '출석하기' : '퇴실하기'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.checkWrap}>
            <Text style={styles.title}>출석 현황</Text>
            <Text>
              출석 상태 :{' '}
              <Text style={{color: !attend ? '#32A89C' : '#FF6C6C'}}>
                {attend ? 'X' : 'O'}
              </Text>
            </Text>
            <Text>출석 장소 : LAB 20실</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F6F7F9',
  },
  container: {
    width: '80%',
    position: 'relative',
    height: '100%',
  },
  contents: {
    position: 'absolute',
    display: 'flex',
    gap: height * 0.025,
    top: height * 0.04,
  },
  topNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg: {
    width: width * 0.11,
    height: width * 0.1,
  },
  infoImg: {
    width: width * 0.07,
    height: width * 0.07,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 600,
  },
  checkWrap: {
    width: '100%',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 20,
    gap: height * 0.02,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  zzz: {
    width: width * 0.078,
    height: width * 0.055,
    position: 'absolute',
    top: height * -0.03,
    right: width * 0.12,
  },
  smile: {
    width: width * 0.15,
    height: width * 0.1,
    position: 'absolute',
    top: height * -0.03,
    right: width * 0.1,
  },
  phone: {
    width: width * 0.4,
    height: height * 0.17,
  },
  checkStatWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: height * 0.02,
  },
  checkText: {
    color: 'white',
    fontWeight: 600,
    fontSize: width * 0.04,
  },
});
export default Main;
