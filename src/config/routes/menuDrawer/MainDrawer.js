import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import user from '../../../assets/myUser.png'
// import user from '../../../assets/user.png'

import styles from './styles'
import { DrawerItems } from 'react-navigation';

const MainDrawer = (props) => {

	let t = props.screenProps.t;

	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.text}>{t('mainDrawer:title')}</Text>

			</View>
			<View style={styles.middleContainer}>
				<DrawerItems {...props} />
				<View style={styles.footer}>
					<Text style={styles.footerText}>{t('mainDrawer:author')}</Text>
					<Text style={styles.footerText}>{t('mainDrawer:version')}</Text>
				</View>
			</View>
		</View>
	)
}

export { MainDrawer }