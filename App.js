import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import BreedCell from './BreedCell'
import { petTypes, cats, dogs } from './breeds'

console.log(petTypes)

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	renderItems({item, index }) {
		return (
			<BreedCell
				data={item}
				style={styles.cell}
				// breed={item.breed}
			/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>By Breed starter</Text>
				<FlatList
					style={styles.list}
					data={cats}
					renderItem={this.renderItems}
					keyExtractor = {(item, index) => `${index}-${item.breed}`}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
