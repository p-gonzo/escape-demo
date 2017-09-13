import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Cylinder,
  Sphere,
  PointLight,
  VrButton,
  
} from 'react-vr';

export default class escape_demo extends React.Component {
	
constructor() {
    super();
    this.state = {
		message: 'Have a look around the room...\nClick all four shapes in order until they disappear!',
		background: 'chess-world.jpg',
		firstClicked: false,
		secondClicked: false,
		thirdClicked: false,
		fourthClicked: false,
    }
  }
	
  pickShape(shapeNumber) {
	  
	  if (shapeNumber == "firstShape" &&
		 this.state.firstClicked === false &&
		 this.state.secondClicked === false &&
		 this.state.thirdClicked === false &&
		 this.state.fourthClicked === false) {
		      this.setState({firstClicked: true});
	  }
	  if (shapeNumber == "secondShape" &&
		 this.state.firstClicked === true &&
		 this.state.secondClicked === false &&
		 this.state.thirdClicked === false &&
		 this.state.fourthClicked === false) {
		      this.setState({secondClicked: true});
	  }
	  if (shapeNumber == "thirdShape" &&
		 this.state.firstClicked === true &&
		 this.state.secondClicked === true &&
		 this.state.thirdClicked === false &&
		 this.state.fourthClicked === false) {
		      this.setState({thirdClicked: true});
	  }
	  if (shapeNumber == "fourthShape" &&
		 this.state.firstClicked === true &&
		 this.state.secondClicked === true &&
		 this.state.thirdClicked === true &&
		 this.state.fourthClicked === false) {
		      this.setState({fourthClicked: true});
		  	  this.setState({message: "You've Escaped The Room!"});
		      this.setState({background: "beach.jpg"});
	  }
  }
	
render() {
	return (
		<View>
		<Pano source={asset(this.state.background)}/>
		<PointLight intensity={2} style={{transform:[{translate:[0, 0, 0]}]}} />
        
        <Text
			style={{
					color: "black",
					fontSize: 0.6,
					layoutOrigin: [0.5, 0.5],
					textAlign: 'center',
					transform: [{translate: [0, -3, -8]}],
					position: 'absolute',
			}}>
				{this.state.message}
			</Text>

		<VrButton
			onClick={() => this.pickShape("firstShape")}>
			<Box
				lit={true}
				wireframe={this.state.firstClicked}
				dimWidth={0.8}
				dimHeight={0.3}
				dimDepth={0.5}

				style={{
				color: 'red',
				transform: [{translate: [0, 0, -3]},
				{rotateY: 45},
				{rotateZ: 45}],
				}}
			/>
		</VrButton>
		<VrButton
			onClick={() => this.pickShape("secondShape")}>
			<Cylinder
				lit={true}
				wireframe={this.state.secondClicked}
				radiusTop={0.2}
				radiusBottom={0.2}
				dimHeight={0.6}
				segments={8}

				style={{
				color: 'blue', 
				transform: [{translate: [0,0,3]},
				{rotateY: 45},
				{rotateZ: 45}],
				}}
			/>
		</VrButton>
		<VrButton
			onClick={() => this.pickShape("thirdShape")}>
			<Sphere
				lit={true}
				wireframe={this.state.thirdClicked}
				radius={0.3}
				widthSegments={20}
				heightSegments={12}
				
				style={{
				color: 'green',
				transform: [{translate: [-3,0,0]}],
				}}
			/>
		</VrButton>
		<VrButton
			onClick={() => this.pickShape("fourthShape")}>
			<Box
				lit={true}
				wireframe={this.state.fourthClicked}
				dimWidth={0.8}
				dimHeight={0.3}
				dimDepth={0.5}

				style={{
				color: 'yellow',
				transform: [{translate: [3, 0, 0]},
				{rotateY: 45},
				{rotateZ: 45}],
				}}
			/>
		</VrButton>
		</View>
	);
}	
};

AppRegistry.registerComponent('escape_demo', () => escape_demo);
