import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { UserPost } from './endpoints/UserPost'

export const api = () => {
    const [value, onChangeText] = React.useState('');

    return (
      <View
        style={{
          backgroundColor: value,
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
        }}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={{padding: 10}}
        />
      </View>
    );
}
