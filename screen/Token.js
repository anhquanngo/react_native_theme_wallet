import React from 'react'
import { View, Text } from 'react-native'
import CoinList from '../components/CoinList'
import Wallet from '../components/Wallet'

export default function Token() {
    return (
        <>
            <Wallet />
            <CoinList />
        </>
    )
}
