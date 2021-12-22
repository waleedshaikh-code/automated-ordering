import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

const HeaderTab = () => {
  const [activeTab, setactiveTab] = useState('Delivery');
  return (
    <View
      style={{flexDirection: 'row', alignSelf: 'center', paddingVertical: 15}}>
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
    </View>
  );
};

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setactiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default HeaderTab;

const styles = StyleSheet.create({});
