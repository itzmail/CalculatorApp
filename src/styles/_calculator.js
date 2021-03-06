import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    result: {
        flex: 2,
        backgroundColor: 'red'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: 'yellow'
    },
    operation: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default styles;