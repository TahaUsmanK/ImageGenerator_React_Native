import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dropdown} from 'react-native-element-dropdown';
import APIService from '../../service/api_service/api_service';
import DropDownData from '../../core/data/dropdowndata';
import HomeStyle from '../../style/home_style/home_style';
import PermissionService from '../../service/permission_service/permission_service';

const HomeScreen = () => {
  const [imageData, setImageData] = useState('');
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await APIService(data);
      setImageData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <View style={HomeStyle.dropDownView}>
        <Dropdown
          data={DropDownData}
          labelField="label"
          valueField="value"
          placeholder={'Select Category'}
          style={HomeStyle.dropDownStyle}
          selectedTextStyle={{color: 'black'}}
          placeholderStyle={{color: 'black'}}
          itemTextStyle={{color: 'black'}}
          onChange={item => {
            setData(item.value);
          }}
        />
        <Icon.Button
          name="search"
          backgroundColor="transparent"
          underlayColor={'transparent'}
          onPress={fetchData}
          color={'black'}
        />
      </View>
      <View style={HomeStyle.imageView}>
        {imageData ? (
          <Image source={{uri: imageData}} style={HomeStyle.imageStyle} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
