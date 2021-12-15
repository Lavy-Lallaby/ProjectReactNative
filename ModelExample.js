import React, { useState } from 'react'
import { StyleSheet, View, Modal, Button, SafeAreaView, Text } from 'react-native'

const ModelExample = () => {
    const [shModal, setModal] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Modal animationType='slide' transparent={false} visible={shModal}>
                    <View style={styles.modal}>
                        <Text style={styles.text}>
                            Modal is open
                        </Text>
                        <Button title='Click to close modal' onPress={() => setModal(!shModal)}></Button>
                    </View>
                </Modal>
                {/*update status modal*/}
                <Button title='Click to open modal' onPress={() => setModal(!shModal)}></Button>
            </View>
        </SafeAreaView>
    )
}

export default ModelExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0fff0',
        padding: 100,
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
})
