import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calculation: {
        flex: 2,
        backgroundColor: '#0c3107f0',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculationText: {
        color: 'black',
        fontSize: 40
    },
    result: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    resultText: {
        fontSize: 30,
        color: 'white'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 30
    },
    numbers: {
        flex: 3,
        backgroundColor: '#1c860ede'
    },
    operation: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'black'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default styles;