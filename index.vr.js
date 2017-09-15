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
		shapeClicked: [false, false, false, false],
		gameShapes: [1, 2, 3, 4],
		randomShapes:[],
    }
	this.newGameSet();
  }

  //function to randomize shape order at the start of each game (page refresh)
  newGameSet() {
	  for (var i = this.state.gameShapes.length-1;i>=0;i--){
		  let x = Math.floor(Math.random() * this.state.gameShapes.length);
		  this.state.randomShapes.push(this.state.gameShapes[x]);
  		  this.state.gameShapes.splice(x, 1);
	  }
	  //console.log(this.state.randomShapes);
  }
	
  pickShape(shapeNumber) {
	  //console.log(shapeNumber);
	  //console.log(this.state.shapeClicked.toString());
	  
	  if (shapeNumber == 1) { 
		 	if 	(this.state.shapeClicked.toString() == "false,false,false,false") {
		 			//console.log("1 clicked");
		 			this.setState({shapeClicked: [true,false,false,false]});
	  		}
		  	else {
			  	this.setState({shapeClicked: [false,false,false,false]});
		  	}
	  }
	  if (shapeNumber == 2) { 
		 	if 	(this.state.shapeClicked.toString() == "true,false,false,false") {
					 //console.log("2 clicked");
					 this.setState({shapeClicked: [true,true,false,false]});
	  		}
		  	else {
			  	this.setState({shapeClicked: [false,false,false,false]});
		  	}
	  }
	  if (shapeNumber == 3) { 
		 	if 	(this.state.shapeClicked.toString() == "true,true,false,false") {
					 //console.log("3 clicked");
					 this.setState({shapeClicked: [true,true,true,false]});
	  		}
		  	else {
			  	this.setState({shapeClicked: [false,false,false,false]});
		  	}
	  }
	  if (shapeNumber == 4) { 
		 	if 	(this.state.shapeClicked.toString() == "true,true,true,false") {
					 //console.log("4 clicked");
					 this.setState({shapeClicked: [true,true,true,true]});
					 this.setState({message: "You've Escaped The Room!"});
					 this.setState({background: "beach.jpg"});
	  		}
		  	else {
			  	this.setState({shapeClicked: [false,false,false,false]});
		  	}
	  }
  }

	
render() {
	return (
		<View>
		<Pano source={asset(this.state.background)}/>
		<PointLight intensity={1.5} style={{transform:[{translate:[0, 0, 0]}]}} />
        
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
			onClick={() => this.pickShape(this.state.randomShapes[0])}>
			<Box
				lit={true}
				wireframe={this.state.shapeClicked[this.state.randomShapes[0] - 1]}
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
			onClick={() => this.pickShape(this.state.randomShapes[1])}>
			<Cylinder
				lit={true}
				wireframe={this.state.shapeClicked[this.state.randomShapes[1] - 1]}
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
			onClick={() => this.pickShape(this.state.randomShapes[2])}>
			<Sphere
				lit={true}
				wireframe={this.state.shapeClicked[this.state.randomShapes[2] - 1]}
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
			onClick={() => this.pickShape(this.state.randomShapes[3])}>
			<Box
				lit={true}
				wireframe={this.state.shapeClicked[this.state.randomShapes[3] - 1]}
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
