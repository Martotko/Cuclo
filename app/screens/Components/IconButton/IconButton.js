import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles, { AppVariables } from '../../../AppStyles';

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	iconStyle: {
		color: AppVariables.appBlack,
	},
});

export default function IconButton(props) {
	const { nSize, sIcon, fnPress } = props;
	const { container, iconStyle } = styles;
	const { center } = AppStyles;

	return (
		<TouchableOpacity style={[container, center]} onPress={fnPress}>
			<Icon name={sIcon} style={iconStyle} size={nSize} />
		</TouchableOpacity>
	);
}

IconButton.propTypes = {
	nSize: PropTypes.number,
	sIcon: PropTypes.string,
	fnPress: PropTypes.func,
};

IconButton.defaultProps = {
	nSize: AppVariables.fontSizeHeavy,
	sIcon: 'ios-play',
	fnPress: () => { },
};