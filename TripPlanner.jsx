import React, { Component, useEffect, useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


    

export default class App extends Component {
    
    state = {
        addTripsPageDisplay: 'block',
        tripListPageDisplay: 'none',
        weatherPageDisplay: 'none',
        newtripName: '',
        newstartDate: '',
        newtripImage: '',
        tripsListArray: [],
        mileage: '',
        costPerGallon: '',
        cost: 0,
    };


    handleAddButtonPress = () => this.setState(state => ({
        addTripsPageDisplay: 'block',
        tripListPageDisplay: 'none',
        weatherPageDisplay: 'none',
        
    }));
    
    handleTripsButtonPress = () => this.setState(state => ({
        addTripsPageDisplay: 'none',
        tripListPageDisplay: 'block',
        weatherPageDisplay: 'none',
    }));
    
    handleWeatherButtonPress = () => this.setState(state => ({
        addTripsPageDisplay: 'none',
        tripListPageDisplay: 'none',
        weatherPageDisplay: 'block',
    }));
    
    handleAddTrip = (newtripName, newstartDate, newtripImage) => {
            this.state.tripsListArray.push({
                tripName: newtripName, 
                startDate: newstartDate, 
                tripImage: newtripImage,
            })
            this.setState({
            newtripName: '',
            newstartDate: '',
            newtripImage: '',
            })
    };
    
    handleCostButton = (miles, price) => {
            this.setState({
            cost: (Number(miles) * Number(price)).toFixed(2),
            mileage: '',
            costPerGallon: '',
            })
    };
    

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/daf6659da38d0de20792cc365b532bc3' }}
                >
                    <View style={styles.titleContainer}>
                    
                        <Text style={styles.titleText}>
                            Trip Planner
                        </Text>
                    </View>
                    
                    
                    <View style={{display: this.state.addTripsPageDisplay}}>
                        <View style={styles.mainAddTripContainer}>
                            
                            <View style={styles.tripInputContainer}>
                                    <TextInput
                                        value={this.state.newtripName}
                                        onChangeText={(newtripName) => this.setState({newtripName})}
                                        style={{ width: deviceWidth/1.5, height: 44, padding: 4, borderWidth: 2 }}
                                        placeholder="Enter Trip Name Here"
                                    />
                            </View>
                            
                            <View style={styles.dateInputContainer}>
                                    <TextInput
                                        value={this.state.newstartDate}
                                        onChangeText={(newstartDate) => this.setState({newstartDate})}
                                        style={{ width: deviceWidth/1.5, height: 44, padding: 4, borderWidth: 2 }}
                                        placeholder="Enter Start Date Here"
                                    />
                            </View>
                            
                            <View style={styles.imageInputContainer}>
                                    <TextInput
                                        value={this.state.newtripImage}
                                        onChangeText={(newtripImage) => this.setState({newtripImage})}
                                        style={{ width: deviceWidth/1.5, height: 44, padding: 4, borderWidth: 2 }}
                                        placeholder="Paste URI of trip image here"
                                    />
                            </View>
                            
                            
                            <View style={styles.submitTripContainer}>
                            
                                <TouchableHighlight
                                    onPress={() => this.handleAddTrip(this.state.newtripName, this.state.newstartDate, this.state.newtripImage)}
                                >
                                    <View style={styles.addTripButton}>
                                        Add Trip!
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                    
                    <View style={{display: this.state.tripListPageDisplay}}>
                        <View style={styles.mainTripsContainer}>
                        
                        <ScrollView>    
                            {this.state.tripsListArray.map((trip) => (
                                <View style={styles.tripsDisplayContainer}>
                                
                                    <View style={styles.nameDateContainer}>
                                        <View style={styles.nameContainer}>
                                            <Text style={styles.tripNameText}>
                                            {trip.tripName}
                                            </Text>
                                        </View>
                                    
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dateText}>
                                            {trip.startDate}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={trip.tripImage}
                                            style={{ height: deviceHeight/4.25, width: deviceWidth/2.25, padding: 2 }}
                                        />
                                    </View>
                                    
                                </View>
                                ))}
                        </ScrollView>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                    
                    
                    <View style={{display: this.state.weatherPageDisplay}}>
                    
                        <View style={styles.weatherMainContainer}>
                        
                            <View style={styles.mileageEnterContainer}>
                                <TextInput
                                        value={this.state.mileage}
                                        onChangeText={(mileage) => this.setState({mileage})}
                                        style={{ width: deviceWidth/1.5, height: 44, padding: 4, borderWidth: 2, backgroundColor: '#a1e20c' }}
                                        placeholder="Enter Total Miles Here"
                                    />
                            </View>
                            <View style={styles.gasPriceEnterContainer}>
                                <TextInput
                                        value={this.state.costPerGallon}
                                        onChangeText={(costPerGallon) => this.setState({costPerGallon})}
                                        style={{ width: deviceWidth/1.5, height: 44, padding: 4, borderWidth: 2, backgroundColor: '#a1e20c' }}
                                        placeholder="Enter Cost of Gas Here"
                                    />
                            </View>
                            
                            
                            <View style={styles.displayCostContainer}>
                            
                                <Text style={styles.totalCostText}>
                                    ${this.state.cost}
                                </Text>
                                
                            </View>
                            
                            
                            <View style={styles.buttonContainer}>
                            
                                <TouchableHighlight
                                    onPress={() => this.handleCostButton(this.state.mileage, this.state.costPerGallon)}
                                >
                                
                                    <View style={styles.costSubmitButton}>
                                        Get Cost!
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                    
                    <View style={styles.navBarContainer}>
                    
                        <TouchableHighlight
                            onPress={this.handleAddButtonPress}
                        >
                            <View style={styles.navBarButton}>
                                Add
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={this.handleTripsButtonPress}
                        >
                            <View style={styles.navBarButton}>
                                Trips
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={this.handleWeatherButtonPress}
                        >
                            <View style={styles.navBarButton}>
                                Costs
                            </View>
                        </TouchableHighlight>
                    
                    </View>
                
                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    titleContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: '#8ec90a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: deviceHeight/18,
        fontWeight: 'bold',
    },
    //NAVBAR STYLES START******************************NAVBAR START
    navBarContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: '#8ec90a',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    navBarButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: '#a1e20c',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    //NAVBAR STYLES END**************************************NAVBAR END
    
    //ADD TRIP PAGE START*********************************ADD TRIP START
    mainAddTripContainer:{
        height: 6*(deviceHeight/8),
        width: deviceWidth,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tripInputContainer: {
        //height: 2*(deviceHeight/8),
        width: deviceWidth/1.5,
        backgroundColor: '#a1e20c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateInputContainer: {
        //height: 2*(deviceHeight/8),
        width: deviceWidth/1.5,
        backgroundColor: '#a1e20c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageInputContainer: {
        //height: 2*(deviceHeight/8),
        width: deviceWidth/1.5,
        backgroundColor: '#a1e20c',
        alignItems: 'center',
        justifyContent: 'center',    
    },
    submitTripContainer: {
        //height: 2*(deviceHeight/8),
        width: deviceWidth,
        //backgroundColor: '#a1e20c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTripButton: {
        height: deviceHeight/10,
        width: deviceWidth/2,
        backgroundColor: 'rgba(161,226,12, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    //ADD TRIP PAGE END*****************ADD TRIP END
    
    //TRIP LIST STYLES START****************************TRIP LIST START
    mainTripsContainer: {
        height: 6*(deviceHeight/8),
        width: deviceWidth,
        //backgroundColor: 'yellow',
        //alignItems: 'center',
        //justifyContent: 'space-around',
        //flexDirection: 'row',
    },
    tripsDisplayContainer: {
        flexDirection: 'row',
        borderBottomWidth: 3,
    },
    nameDateContainer: {
        height: 2*(deviceHeight/8),
        width: deviceWidth/2,
        //backgroundColor: 'yellow',
        padding: 5,
    },
    nameContainer: {
        paddingBottom: 8,    
    },
    tripNameText: {
        fontSize: deviceHeight/22,
        textAlign: 'left',
        color: 'white',
    },
    dateText: {
        fontSize: deviceHeight/26,
        textAlign: 'left',
        color: 'white',
    },
    dateContainer: {
        
        
    },
    imageContainer: {
        height: 2*(deviceHeight/8),
        width: deviceWidth/2,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },
    //TRIP LIST STYLES END****************************TRIP LIST END
    
    //WEATHER STYLES START*********************************WEATHER PAGE START
    weatherMainContainer: {
        height: 6*(deviceHeight/8),
        width: deviceWidth,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    costSubmitButton: {
        height: deviceHeight/10,
        width: deviceWidth/2,
        backgroundColor: 'rgba(161,226,12, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    mileageEnterContainer: {
        
    },
    displayCostContainer: {
        width: deviceWidth/1.5, 
        height: 44, 
        padding: 4, 
        borderWidth: 2,
        backgroundColor: '#a1e20c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //WEATHER STYLES START*********************************WEATHER PAGE START
});
