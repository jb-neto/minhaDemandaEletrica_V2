import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';


export default function BoxResults(props) {

    return (

        <View style={styles.boxHeader}>
            <Text style={styles.txt_titleBox}>{props.title}</Text>
            <Text style={styles.txt_subTitleBox}>{props.value}</Text>
            {
                props.unit ?
                    <Text style={styles.txt_subTitleBox2}>{props.unit}</Text>
                    : null
            }

        </View>
    )
}