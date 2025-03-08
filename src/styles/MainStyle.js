import { StyleSheet } from "react-native";

export const registerstyle = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f5f5f5", 
      },
    
      signUpContainer: {
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        alignSelf: "center",
        alignItems: "center", 
        justifyContent: "center", 
      },
    
      TextInput: {
        borderWidth: 1,
        borderColor: "#ccc",  
        width: "90%",        
        fontSize: 16,
        marginBottom: 15,
        height: 45,         
        paddingHorizontal: 15,
        textAlign: "left",   
        borderRadius: 8,    
        backgroundColor: "#f9f9f9",
        shadowColor: "#000",  
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.1,  
        shadowRadius: 4,  
        elevation: 2,     
      },
      
    
      button: {
        backgroundColor: "rgba(111, 202, 186, 1)",
        padding: 10,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center", 
        height: 40,
        width: 210,
      },
    
      text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
    
      signUpText: {
        marginBottom: 20,
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        paddingVertical: 10,
      },

      switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
      },
      
      switchText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#333",
      },

})