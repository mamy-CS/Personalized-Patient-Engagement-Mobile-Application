import React from 'react'

import { CheckBox } from 'react-native-elements'

const Checklist = props => {
    return (
        <View>
            <CheckBox title='Checkbox' checked={false}></CheckBox>
        </View>
    )
}

export default Checklist