import { Component } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  isEmailPasswordValid = () => {
    const { email, password } = this.state;
    if (email !== "test@gmail.com" || password !== "password") {
      this.setState({ error: "Email or password is not valid" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(txt) => this.setState({ email: txt })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          secureTextEntry
          onChangeText={(txt) => this.setState({ password: txt })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.isEmailPasswordValid}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    width: "30%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
