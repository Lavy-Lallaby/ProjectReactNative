import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewExample = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView source={{ uri: 'https://dict.longdo.com/' }}
                style={{ marginTop: 20 }}>
            </WebView>
        </SafeAreaView>
    )
}

export default WebViewExample
