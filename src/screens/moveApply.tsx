import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';
import CustomDropdown from '../components/customDropdown';

const {width, height} = Dimensions.get('window');

const MoveApply = () => {
  const navigation = useNavigation();
  const [timeItem, setTimeItem] = useState([
    {label: '8교시', value: 'eight'},
    {label: '9교시', value: 'nine'},
    {label: '10교시', value: 'ten'},
    {label: '11교시', value: 'eleven'},
  ]);
  const goToMoveTab = () => {
    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.topNav}>
            <TouchableOpacity onPress={() => goToMoveTab()}>
              <Image
                source={require('../assets/darkArrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>실 이동 신청하기</Text>
          </View>
          <View style={styles.checkWrap}>
            <Text style={styles.checkText}>실 이동 신청하기</Text>
            <View style={styles.formWrap}>
              <Text style={styles.smallTitle}>이동 사유</Text>
              <TextInput
                placeholder="사유를 적어주세요."
                style={styles.inputText}
              />
            </View>
            <View style={styles.formWrap}>
              <Text style={styles.smallTitle}>이동 실</Text>
              <CustomDropdown
                items={timeItem}
                setItems={setTimeItem}
                placeholder="이동할 실을 선택하세요."
              />
            </View>
            <View style={styles.formWrap}>
              <Text style={styles.smallTitle}>이동 교시</Text>
              <CustomDropdown
                items={timeItem}
                setItems={setTimeItem}
                placeholder="교시를 선택하세요."
              />
            </View>
          </View>
          <Button
            title="확인"
            action={() => console.log('안녕')}
            color="#323A45"
          />
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
  title: {
    fontSize: width * 0.06,
    fontWeight: 600,
  },
  arrow: {
    width: width * 0.05,
    height: width * 0.1,
  },
  container: {
    width: '80%',
    position: 'relative',
    height: '100%',
  },
  contents: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    gap: height * 0.025,
    top: height * 0.04,
  },
  checkText: {
    fontWeight: 800,
    fontSize: width * 0.055,
    color: '#323A45',
  },
  formWrap: {
    gap: height * 0.015,
  },
  smallTitle: {fontSize: width * 0.04},
  inputText: {
    borderColor: '#B7B7B7',
    borderWidth: 1,
    width: '100%',
    height: height * 0.1,
    paddingHorizontal: width * 0.02,
    borderRadius: 5,
    fontSize: 10,
  },
  topNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.06,
  },
  checkWrap: {
    width: '100%',
    minHeight: height * 0.5,
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    gap: height * 0.03,
  },
  checkButton: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#323A45',
  },
});
export default MoveApply;
