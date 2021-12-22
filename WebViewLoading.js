import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, ActivityIndicator } from 'react-native'
import WebView from 'react-native-webview'

const ActIndicater = () => {
    return (
        <View style={styles.activetyIndicatorStyle}>
            <ActivityIndicator color='#ffffff' size='large' />
        </View>
    );
}

const WebViewLoading = () => {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <WebView source={{ uri: 'https://it.tni.ac.th' }}
                    style={{ flex: 1 }} javaScriptEnabled={true}
                    onLoadStart={() => { setVisible(true) }}
                    onLoadEnd={() => { setVisible(false) }}></WebView>
                {
                    visible ? <ActIndicater /> : null
                }
            </View>
        </SafeAreaView>
    )
}

export default WebViewLoading

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff',
        flex: 1,
    },
    activetyIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
})
