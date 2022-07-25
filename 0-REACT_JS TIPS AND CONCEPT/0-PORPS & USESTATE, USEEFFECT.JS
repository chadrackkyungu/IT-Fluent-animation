*===========================*
	//PART 1 CLASS 
*==========================*
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';

class One extends React.Component{

  //1: state is like a variable that holding Object
  state = {name: 'chadrack', surname:'kyungu', age:24};  
  //this function will changes those variables
  changeDetails = () =>{
    this.setState({ name:'Mechack', surname:'Kaba', age:20 });
  }
  
  //2: counter
  state = {counter: 0} //this is the state that holdthe variable 0

  //function that changes the state variable the event is trigger
  increaseCounter = () =>{
    this.setState({counter: this.state.counter + 1});
  }
  
  //function that trigger when the user click next screen
  goToNext_Screen = () =>{
    this.props.navigation.navigate('First_Exmp_With_Func');
  }

  render(){
      return (
        <View style={styles.center}>

          <Text> Name : {this.state.name} </Text>
          <Text> SurName : {this.state.surname} </Text>
          <Text> Age : {this.state.age} </Text>
         
         <View style={styles.btn}>
            <Button title="change Details" color="blue" 
              onPress={this.changeDetails} 
            />
         </View>


        <View style={styles.counter}>

            <Text> Change Counter <Text style={styles.number}> {this.state.counter} </Text> </Text>

            <TouchableOpacity  style={styles.btnStyle}
                onPress={this.increaseCounter}
            >
            <Text style={{textAlign:'center',color:'white'}}> Counter </Text>
            </TouchableOpacity>

        </View>


          <View style={styles.counter}>
            <Button 
              title="Next Screen"
              color='green'
              onPress={this.goToNext_Screen}
            />
          </View>

        </View>
      );
  }
}

//screen options setUp
export const screenOptions = {
  headerTitle: ' Example 1 Class Component '
}



const styles = StyleSheet.create({
  center:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  btn:{
    marginTop:40
  },
  counter:{
      marginTop:20,
  },
  number:{
      fontSize: 30
  },
  btnStyle:{
      backgroundColor:'black',
      padding:10,
      marginTop:30,
      borderRadius:5
  }
})
export default  One;





// EXAMPLE 2
class MyComponent(props) extends React.Component {
  
  mySpecialFunction() {
    console.log('you clicked the button!')
  }
  
  onClickHandler(e) {
    this.mySpecialFunction();
  }
  
  
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}</Text>
        <Button onClick={this.onClickHandler}/>
      </View>
    );
  }
  
}
export default MyComponent;




//EXAMPLE 3
class One extends React.Component{
*we have state name which is initial empty then we take it we pass it to input value if there was something in state name it was going to show inside the empty but in this case it empty.
state = {name: ''};

* we hv a func, that func takes values every time the input is trigger then pass that value to paramater {e} then the paramater pass it in the object Name name, then object pass the value in setState, then setState pass it to state
takeInput = (e) =>{
  this.setState({name: e.nativeEvent.text});
}

render(){
  return(
    <View style={styles.center}>
      <Text style={{color:'brown', fontSize:25,textTransform:'uppercase'}}> 
          WHAT YOUR NAME : {this.state.name} 
      </Text> 

      <TextInput style={{borderWidth:1, borderColor:'black', padding:6, margin:10}}
        onChange={this.takeInput}
        placeholder="Enter Your Name"
        value={this.state.name}
      />

    </View>
  )
}
export default  One;








/*================================*
		PART 2 CLASS
*=================================*
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

//! usestate using classComponents Multiple state Properties
//useState can be destructured multiple times for each individual variable.
class Two extends Component{
    //state variable that hold our object
    state = {
        type:'Mercedece',
        year: 2020,
        used: true
    }

    //function to change our state
    changeState = () =>{
        this.setState({
            type:'BMW',
            year:2021,
            used:false
        })
    }

  goNextScreen = () =>{
    this.props.navigation.navigate('Exmp_2_FuncComp')
  }

  render(){
      return (
        <View style={styles.center}>

            <View style={styles.btn}>
                <Text> {this.state.type} </Text>
                <Text> {this.state.year} </Text>
                <Text> {this.state.used ? 'Used Car' : 'Brand New'} </Text>
            </View>

            <View style={styles.counter}>
                <TouchableOpacity  style={styles.btnStyle} onPress={this.changeState}>
                    <Text style={{textAlign:'center',color:'white'}}> Change Car Details </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.counter}>
                <Button title="Next Screen" color='green' onPress={this.goNextScreen}/>
            </View>

        </View>
      );
  }
}

//screen options setUp
export const screenOptions = {
  headerTitle: ' Example 2 Class Component '
}


const styles = StyleSheet.create({
  center:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  btn:{
    marginTop:40
  },
  counter:{
      marginTop:20,
  },
  number:{
      fontSize: 30
  },
  btnStyle:{
      backgroundColor:'black',
      padding:10,
      marginTop:30,
      borderRadius:5
  },
  input:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:1,
    padding:5,
    width:'60%',
    margin:10,
    borderRadius:3
  }
})
export default  Two;




// EXAMPLE 2
class Two extends Component{
  state = {
    name: '',
    phone_Number: ''
  }

  getInputName = (e) =>{
    this.setState({ name: e.nativeEvent.text})
  }

  getInputPhone = (e) =>{
    this.setState({phone_Number: e.nativeEvent.text})
  }

  render(){
    return(
      <View style={styles.center}>

        <Text> Your Name is : {this.state.name} </Text>
        <Text> Your Cell Number is : {this.state.phone_Number} </Text>

        <View style={styles.input}>
          <Text style={styles.InputText}> Name :</Text>
          <TextInput 
            onChange={this.getInputName}
            placeholder="Enter your Name"
            value={this.state.name}
          />
        </View>


        <View style={styles.input}>
          <Text style={styles.InputText}> Cell Num :</Text>
          <TextInput 
            onChange={this.getInputPhone}
            placeholder=" Your Phone Number"
            value={this.state.phone_Number}
          />
        </View>

      </View>
    )
  }
}
export default Two;





















============================*
		PART 3 CLASS
============================*/
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

//! component DidMount:  using Class
//in this example it was used to Update the value of a state variable,,, 5 second after the component mounts.
//therefore you will require the useEffect hook to handler the lifeCycle methode.

class Three extends Component{

  //state var holdong a sms
  state = { Message: " What's happening this week "}

  //change our state after 2 min
  comp_Did_Mount = () =>{
      setTimeout(() =>{
        this.setState({Message: ' Nothing Much bro.'})
      }, 2000)
  }

  goNextScreen = () =>{
    this.props.navigation.navigate('Exmp_3_FuncComp')
  }

  render(){
      return (
        <View style={styles.center}>

            <View style={styles.btn}>
                <Text> {this.state.Message} </Text>
            </View>

            <View style={styles.counter}>
                <TouchableOpacity  style={styles.btnStyle} onPress={this.comp_Did_Mount}>
                    <Text style={{textAlign:'center',color:'white'}}> Change Car Details </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.counter}>
                <Button title="Next Screen" color='green' onPress={this.goNextScreen}/>
            </View>

        </View>
      );
  }
}

//screen options setUp
export const screenOptions = {
  headerTitle: ' Example 3 Class Comp '
}


const styles = StyleSheet.create({
  center:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  btn:{
    marginTop:40
  },
  counter:{
      marginTop:20,
  },
  number:{
      fontSize: 30
  },
  btnStyle:{
      backgroundColor:'black',
      padding:10,
      marginTop:30,
      borderRadius:5
  }
})
export default  Three;









==========================*
		PART 4 CLASS
===========================*
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

//!Class Components which conditional Render Another Components using Ternary Oparator
import ImComponents from '../../components/4-RenderingComp-Conditional/Import_me';

class Four extends Component{

  //initial text in the variable {Display_Text}  is true
  state = {Display_Text: true }

  //function to change the text to a component in our state
  changeState_To_Copm = () =>{
      //Note: if i assign the variable {Display_Text} to false, instead of {!this.state.Display_Text} it will render the component but only once & it want switch back
      this.setState( {Display_Text: !this.state.Display_Text } )
  }

  goNextScreen = () =>{
    this.props.navigation.navigate('Exmp_4_FuncComp')
  }

  render(){
      return (
        <View style={styles.center}>

                <Text style={{fontSize:25, textTransform:'uppercase',textAlign:'center',fontWeight:'bold',color:'blue'}}> 
        {/* if the {state.Display_Text} is true display the text if it's not display the Comp {<ImComponents />} */}
                    {this.state.Display_Text ? 'Click the Button Bellow To Render A File component' : <ImComponents />} 
                </Text>

            <View style={styles.counter}>
                <TouchableOpacity  style={styles.btnStyle} onPress={this.changeState_To_Copm}>
                    <Text style={{textAlign:'center',color:'white'}}> Change this to a component </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.counter}>
                <Button title="Next Screen" color='green' onPress={this.goNextScreen}/>
            </View>

        </View>
      );
  }
}

//screen options setUp
export const screenOptions = {
  headerTitle: ' Example 4 Class Comp '
}


const styles = StyleSheet.create({
  center:{
    flex:1,justifyContent:'center',alignItems:'center'
  },

  btnStyle:{
      backgroundColor:'black',
      padding:10,
      marginTop:30,
      borderRadius:5
  },

})
export default  Four;





=========================================
		PART FIVE CLASS FROM THE BOOK
=========================================


//! Setting Initial State page 28
//* here we use multiple props with arrays
import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';

class MyComponent extends React.Component {

        // *Initializing state
        state={
            name :'chadrack',
            year: 2021,
            color: ['blue','red', 'green', 'brown']
        }

        //* Updating State
        logOut = () =>{
           this.setState({
               name:'',
               year:2020,
               color: ['black', 'orange','purple', 'green']
           })
        }

        goToNextScreen = () =>{
            this.props.navigation.navigate('Exmp_5_FuncComp');
        }
     render() {
        return (
        <View style={{alignItems:'center', marginTop:50}}>
            <Text style={{padding:6,fontSize:20}}>My name is: { this.state.name }</Text>
            <Text style={{padding:6,fontSize:20}}>The year is: { this.state.year }</Text>
            <Text style={{padding:6,fontSize:20}}>My Fav color is : { this.state.color[0] }</Text>
            <Text style={{padding:6,fontSize:20}}>My Fav color is : { this.state.color[1] }</Text>
            <Text style={{padding:6,fontSize:20}}>My Fav color is : { this.state.color[2] }</Text>
            <Text style={{padding:6,fontSize:20}}>My Fav color is : { this.state.color[3] }</Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-around', width:'80%', marginTop:20}}>
                <Button title="click me" color={this.state.color[0]} onPress={this.logOut} />

                <Button title="click me" color={this.state.color[3]} onPress={this.goToNextScreen} />
            </View>
        </View>
        )
     }
}

export const screenOptions = {
    headerTitle: ' Example 5 Class Comp '
}
const styles = StyleSheet.create({
    txt:{borderWidth:1, borderRadius:3, padding:8, width:'60%', textAlign:'center', margin:5}
})
export default MyComponent;



//// EXAMPLE  
//WONDERFULL
 //* STATE WITH OTHER DATA TYPE:
    //* initialised state 
    state = {
        year: 2016, 
        leapYear:true, 
        topics: ['React', 'React-Native','JavaScript'],
        info: {
            paperback:true,
            length: '335 pages',
            type:'Programming'
        }
    }

    //* updating the state 
     Note: this {leapYear} obj in state it holding a boolean true, & in  setState is holding boolean false,
     note insider function we create a variable call {leap_Year} & we pass a component inside that variable, then we check if this {leapYear} obj is true or false then we render any of the component inside this {leap_Year}
    upDating_State = () =>{
        this.setState({
            year: 2021,
            leapYear:false,
            topics: ['PHP','Node.js', 'Vue.js'],
            info:{
                paperback:true,
                length: '332 pages',
                type:'Network'
            }
        })
    }

    render(){
        let leap_Year = <Text style={styles.txt}> Learning by doing </Text>

        if(this.state.leapYear){
            leap_Year = <Text style={styles.txt}> Learn by Practicing </Text>
        }

        return(
            <View style={{alignItems:'center', marginTop:50}}>
                <Text style={styles.txt}> Year: { this.state.year }</Text>
                <Text style={styles.txt}>Info items Length: { this.state.info.length }</Text>
                <Text style={styles.txt}>Array Length is : { this.state.topics.length }</Text>
                <Text style={styles.txt}>Type of Language : { this.state.info.type }</Text>
                { leap_Year }

                <Button title="click me" color='orange' onPress={this.upDating_State} />
            </View>
        )
    }




/ ======================================
    6 STATICK PROPS & DYNAMIC PROPS
    	STATICK PROPS <<
========================================

import React,{useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';

class MyComponent extends React.Component {
    render() {     
        return (
            <BookDisplay 
                book1={"React Native"} 
                book2={"JavaScript"} 
                book3={"Node.js"} 
                book4={"Angula"} 
            />
        )
    }
}

export default MyComponent;

//Note: this Comp can be export from outisde 
class BookDisplay extends React.Component {
    render() { 
        return (       
        <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
          <Text style={styles.txt}>{ this.props.book1 }</Text>
          <Text style={styles.txt}>{ this.props.book2 }</Text>
          <Text style={styles.txt}>{ this.props.book3 }</Text>
          <Text style={styles.txt}>{ this.props.book4 }</Text>
        </View>
      )
    }
}

export const screenOptions = {
    headerTitle: ' Example 6 Static Class Comp '
}

const styles = StyleSheet.create({
    txt:{
        fontSize:25,
        borderWidth:1,
        borderRadius:3,
        padding:8,
        margin:5,
        width:'60%',
        textAlign:'center',
    }
})




  







  / ======================================
    6 STATICK PROPS & DYNAMIC PROPS
    	DYNAMIC PROPS <<
========================================


import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class MyComponent extends Component {
    render() {

      let book1 = 'React Native';
      let book2 = 'JavaScript';
      let book3 = 'PHP';
      let book4 = 'Node.js';

      return (
        <BookDisplay 
            Buk1={ book1 } 
            Buk2={ book2 } 
            Buk3={ book3 } 
            Buk4={ book4 } 
        />
      )
    }
}
export const screenOptions = {
    headerTitle: ' Example 6 Dynamic Class Comp '
}
export default MyComponent;

class BookDisplay extends Component {
  render() {     
      return (      
        <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
            <Text tyle={styles.txt}>{ this.props.Buk1 }</Text>
            <Text style={styles.txt}>{ this.props.Buk2 }</Text>
            <Text style={styles.txt}>{ this.props.Buk3 }</Text>
            <Text style={styles.txt}>{ this.props.Buk4 }</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    txt:{ fontSize:25, borderWidth:1, borderRadius:3, padding:8, margin:5, width:'60%', textAlign:'center', }
})











  / ======================================
    6 STATICK PROPS & DYNAMIC PROPS
    	DYNAMIC PROPS USING STATE <<
========================================


//! Page 34
//! DYNAMIC PROPS USING STATE CLASS COMP STATEFULL
import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

class MyComponent extends React.Component {
    state = {
         book: 'React NAtive',
         book1: 'Vue Native',
         book2: 'Angular',
    }

    updateState = () =>{
        this.setState({
            book: 'JavaScript',
            book1: 'C++',
            book2: 'C#'
        })
    }

    render() {
      return (
        <BookDisplay 
            buk={this.state.book} 
            buk1={this.state.book1} 
            buk2={this.state.book2} 
            Recieved_Update={this.updateState}
        />
      )
    }
}

export const screenOptions ={
    headerTitle:'Dynamic Props using State Class'
}
export default MyComponent;

class BookDisplay extends React.Component {
    render() {
        return (
          <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>

            <Text style={styles.txt}>{ this.props.buk }</Text>
            <Text style={styles.txt}>{ this.props.buk1 }</Text>
            <Text style={styles.txt}>{ this.props.buk2 }</Text>

            <Button title='Update Books' color='blue' onPress={this.props.Recieved_Update} />
            
          </View>
        )
    }
}

const styles = StyleSheet.create({
    txt:{ fontSize:25, borderWidth:1, borderRadius:3, padding:8, margin:5, width:'60%', textAlign:'center', }
})






















/======================================
    7 DESTRUCTING PROPS & STATE
========================================
//! page 37 Destructing state and Props  100& 👍
//instead of Repetition like we did in example 7 last files 
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class MyComponent extends React.Component {

    state = { 
        math: 'Mathematics', 
        French: 'francais',
        Germain: 'Germain',
        Wallon: 'Wallon'
    };

    updateBook() {
        this.setState({ 
            math: 'Physic', 
            French: 'English',
            Germain: 'Bourg',
            Wallon: 'Flament'
        });
    }

    render() {
        //*we destruct all the Objects inside {state}, this means {Bookstitles} now has object math & French
        const { math, French, Germain, Wallon } = this.state

        //instead of comming here with many Props we destruct them using js destructing
        return (
            <BookDisplay
                math_props ={math}
                French_Props ={French}
                Germain_Props={Germain}
                Wallon_Props = {Wallon}
                click_Me_To_UpdateBook={() => this.updateBook()}
            />
        )
    }
}
export const screenOptions = {
    headerTitle: 'Class Destruc With state & Props'
}

export default MyComponent;


class BookDisplay extends React.Component {
    render() {
        const { math_props, French_Props, Germain_Props, Wallon_Props, click_Me_To_UpdateBook } = this.props
        return (
            <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
                <Text style={styles.txt}> { math_props } </Text>
                <Text style={styles.txt}> { French_Props } </Text>
                <Text style={styles.txt}> { Germain_Props } </Text>
                <Text style={styles.txt}> { Wallon_Props } </Text>
                    
                <Button title="click me to see" color="blue"  onPress={click_Me_To_UpdateBook} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    txt:{ fontSize:25, borderWidth:1, borderRadius:3, padding:8, margin:5, width:'60%', textAlign:'center', }
})













/======================================
		8 REACT LIFECYCLE
		COMPONENT DidMount
=======================================

//! page 42 React Lifecycle using class Comp
//* 1.1 The ComponentDidMount Lifecycle Methode
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

class MainComponent extends React.Component {

    state = { 
        loading: true, 
        data: {
            name:'', 
            age:''
        } 
    };

    componentDidMount() {      
        setTimeout(() => { 
            this.setState({
                loading: false,        
                data: { 
                    name: 'Chadrack', 
                    age: 24
                }     
            }) 
        }, 2000)
    } 

 render() { 

    //here we mean if loading has boolean true inside return this JSX on the screen, but after 3min the function {componentDidMount} will set {loading to} false, then the code inside return on line 31 will show on screen.

    if(this.state.loading) {
        return (
            <View style={styles.loadcontainer}>
                <Text style={styles.loadTxt}>...Loading...</Text> 
            </View>
        )   
    }   

    const { name, age } = this.state.data;

    return (      
        <View style={styles.loadcontainer}>        
            <Text style={styles.txt}> Name is : {name}</Text>      
            <Text style={styles.txt}> Age is : {age} </Text>      
        </View>    
    )  
}}
export const screenOptions = {
    headerTitle:'Comp DidMount With Class'
}

export default MainComponent;

const styles = StyleSheet.create({
    loadcontainer:{
        flex:1, justifyContent:'center', alignItems:'center'
    },
    loadTxt:{
        color:'blue', fontSize:30, fontWeight:'bold'
    },
    txt:{
        fontSize:25, fontWeight:'bold', color:'blue'
    }
})


















/======================================
		8 REACT LIFECYCLE
		COMPONENT Did_UPDATE
=======================================
//! page 43 The componentDidUpdate lifecycle method

//* When do we use componentDidUpdate()?
//An example of when to use componentDidUpdate() is when we need to call an external API on condition that the previous state and the current state have changed.
//The call to the API would be conditional to the state being changed. If there is no state change, no API is called.
//Like mentioned before, to avoid an infinite loop, the API call needs to be inside a conditional statement.

//! page 42 React Lifecycle using class Comp
//* 1.1 The ComponentDidMount Lifecycle Methode
//in this Example we rendering the loading screen JSX at first, then when the Button Update is clicked we render Another Screen JSX

import React from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';

class MainComponent extends React.Component {

    state = { 
        loading: true, 
        data: {
            name:'chadrack', 
            age:'20'
        } 
    };
    componentDid_Update = () => {      
           this.setState({loading: !this.state.loading})
    } 

 render() { 

    //here we mean if loading has boolean true inside return this JSX on the screen, but after 3min the function {componentDidMount} will set {loading to} false, then the code inside return on line 31 will show on screen.

    if(this.state.loading) {
        return (
            <View style={styles.loadcontainer}>
                <Text style={styles.loadTxt}> Render me First & when the Button Bellow is clicked Render the Other Screen </Text> 
                <Button title="Update" color="orange" onPress={this.componentDid_Update} />
            </View>
        )   
    }   

    const { name, age } = this.state.data;

    return (      
        <View style={styles.loadcontainer}>        
            <Text style={styles.txt}> Name is : {name}</Text>      
            <Text style={styles.txt}> Age is : {age} </Text>    
        </View>    
    )  
}}
export const screenOptions = {
    headerTitle:'Comp Did_Update With Class'
}

export default MainComponent;

const styles = StyleSheet.create({
    loadcontainer:{
        flex:1, justifyContent:'center', alignItems:'center'
    },
    loadTxt:{
        color:'blue', fontSize:30, fontWeight:'bold',textAlign:'center'
    },
    txt:{
        fontSize:25, fontWeight:'bold', color:'blue'
    }
})



















/======================================
		8 REACT LIFECYCLE
		COMPONENT UN MOUNT
=======================================


=======================================================
	How to manage componentWillUnmount with useEffect
=======================================================
	//If you add a return function inside the useEffect function, 
	//it is triggered when a component unmounts from the DOM. This looks like:

const ComponentExample => () => {
    useEffect(() => {
        return () => {
            // componentwillunmount in functional component.
            // Anything in here is fired on component unmount.
        }
    }, [])
}



=================================================================
	Combining both componentDidMount and componentWillUnmount
=================================================================
//This means that you can use componentDidMount, and componentWillUnmount 
//in the same useEffect function call. Dramatically reducing the amount of code 
//needed to manage both life-cycle events. This means you can easily use componentDidMount 
//and componentWillUnmount within functional components. Like so:

import React, { useEffect } from 'react';
const ComponentExample => () => {
    useEffect(() => {
        // Anything in here is fired on component mount.
        return () => {
            // Anything in here is fired on component unmount.
        }
    }, [])
}