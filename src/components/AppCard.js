import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    Colors,
    Radius,
    Shadows,
    Spacing
} from '../theme';

export default function AppCard({

    children,

    style

}) {

    return (

        <View style={[styles.card, style]}>

            {children}

        </View>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor: Colors.surface,

        borderRadius: Radius.xl,

        padding: Spacing.lg,

        ...Shadows.card

    }

});