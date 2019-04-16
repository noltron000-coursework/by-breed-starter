# FEW 2.4 React Native FlatList

This is a short tutorial on using the FlatList. 

## Overview 

Mobile screens are small and have limited space. The default mode to view content it scrolling lists. 

The FlatList is a simple list that displays data is cells. 

Steve Jobs famously made the claim that you could have 10,000 songs on your iPod/iPhone. This would crash your device if you displayed all of the data at once. The FlatList instead only displays the data that is visible. 

It creates a number of cells that can be displayed on the screen. As these cells scroll, the cells are repopulated with new data and recycled. 

Imagine a list of songs in your phone. As the song on the top moves up past the top of the screen it is moved to the bottom and text labels and images in the cell are repopulated swith new song names and images.  

The example project contains some data for dogs and cats by breed. The data lists values from 0 to 5 on the animal's friendliness, intelligence, playfulness, etc. 

All of this data is in `cat-anddog-breeds.json`. The data here is in a giant object, `breed.js` takes the data and organizes it into arrays. You can import the following arrays from `breed.js`:

- petTypes - Lists the types 
- cats - Lists all of the cats each an object with features
- dogs - lists all of the dogs each and object with features 

Note! Not all cats or dogs have the same feature properties. Many are shared but all properties do not exist on all animals. 

## Challenges 

The goal of these challenges is to use FlatList to display cat and dog breed information in a scrolling list. 

1. Use FlatList to display cat or dog breeds. 
	- The goal here is to do the minimum to display a list. 
	- You'll need to set up FlatList set data and renderItem. 
	- RenderItem can return a minimal component at this stage.
	- Display only the breed name. 
2. Use keyExtractor to set the key on each list item.
	- Set keyExtractor as prop. 
	- define a function to return a unique key name. The breed name by itself should work. I used the name and the index with a hyphen. 
3. Make a custom component for the list item. Lets call this the List cell. 
	- Define the component. Keep the code simple at this stage.
	- The component should take a data object (cat or dog) as a prop. 
	- The component should just display the breed name for now. 
	- Export the component, and import it where your component uses FlatList. 
	- renderItem should return this component. Be sure to set item as data prop. 
4. Customize the List Cell component you made in the previous step. 
	- Grab some of the properties off the data object. Not every breed has all properties! Think of some way to display all proprties that exist on each object.
5. Display cats and dogs. You'll need a UI element to choose the pet type. On iOS you can use SegmentedControlIOS. On Android you can use one or buttons, there are also a couple [third party segmented controls](https://stackoverflow.com/questions/35313387/segmentedcontrolios-for-android-in-react-native)
