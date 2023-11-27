import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const UserPost = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassowrd] = React.useState('')
  return (
    <View>
        <TextInput>
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
        </TextInput>
    </View>
  )
}
