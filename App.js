import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BreedCell from './BreedCell'
import { petTypes, cats, dogs } from './breeds'

console.log(petTypes)

export default class App extends React.Component {
	constructor(props) {
		super(props)

	}

	

	render() {
		return (
			<View style={styles.container}>
			<Text>By Breed starter</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
