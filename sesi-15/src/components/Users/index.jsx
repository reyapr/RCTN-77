import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=100").then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customers</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => {
          const location = item.location;
          const street = location.street;
          const name = item.name;
          return (
            <View style={styles.card}>
              <View>
                <Image
                  source={{
                    uri: item.picture.large,
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.info}>
                <Text
                  style={styles.title}
                >{`${name.title} ${name.first} ${name.last}`}</Text>
                <Text
                  style={styles.address}
                >{`${street.number} ${street.name}, ${location.city}, ${location.state}`}</Text>
                <Text style={styles.email}>{`${item.email}`}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "darkgreen",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  address: {
    fontSize: 12,
    fontWeight: 500,
  },
  email: {
    fontSize: 14,
    fontWeight: 400,
    color: "#bd3396",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#a4b89a",
    padding: 10,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  info: {
    gap: 5,
  },
};

export default Users;
