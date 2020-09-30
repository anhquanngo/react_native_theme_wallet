import React from 'react'
import { View, Text } from 'react-native'
import Table from '../components/Table'
import Form from '../components/Form'

export default function Exchange() {
    return (
        <View>
            <View style={{ flexDirection: "row", borderBottomWidth: 0.5 }}>
                <View style={{ flex: 1 }}>
                    <Form />
                </View>
                <View style={{ flex: 1 }}>
                    <Table />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                <Text style={{ fontSize: 20 }}>Open Order</Text>
                <Text style={{ fontSize: 20, color: "#3375BB" }}>All</Text>
            </View>
        </View>
    )
}
