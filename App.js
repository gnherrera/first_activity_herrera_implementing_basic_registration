import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch, Image } from "react-native";
import { registerstyle } from "./src/styles/MainStyle";

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); 

  const handlepress = () => {
    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill in all fields before signing up!");
      return;
    }
  
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (!isChecked) {
      alert("You must agree to the terms and conditions before signing up.");
      return;
    }
  
    console.log("User Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmpassword);
    console.log("Agree to Terms and Conditions:", isChecked ? "Yes" : "No");
  
    alert("Sign Up Successful!");
    
  
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsChecked(false);
  };

  const handleLogoPress = () => {
    alert("Welcome to Duolingo!"); 
  };
  
  const handleSignupPress = () => {
    alert("This is Sign Up Page !"); 
  };

  return (
    <View style={registerstyle.container}>

      <TouchableOpacity onPress={handleLogoPress}>
        <Image
          source={require('./src/asssets/duolingo.png')} 
          style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 20 }} 
        />
      </TouchableOpacity>

      <View style={registerstyle.signUpContainer}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <TouchableOpacity onPress={handleSignupPress}>
  <Image
    source={require('./src/asssets/icon.png')}
    style={{ width: 75, height: 75, marginRight: 10, marginBottom: 20 }} // Added marginBottom
  />
</TouchableOpacity>
  <Text style={registerstyle.signUpText}>Sign Up</Text>
</View>
        <TextInput
          value={name}
          style={registerstyle.TextInput}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        />

        <TextInput
          value={email}
          style={registerstyle.TextInput}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          value={password}
          style={registerstyle.TextInput}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          value={confirmpassword}
          style={registerstyle.TextInput}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        
        <View style={registerstyle.switchContainer}>
          <Switch
            value={isChecked}
            onValueChange={(value) => setIsChecked(value)}
          />
        <Text style={registerstyle.switchText}>I agree to the terms and conditions</Text> 
        </View>

        <TouchableOpacity style={registerstyle.button} onPress={handlepress}>
          <Text style={registerstyle.text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;