import React, { Component, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  FlatList,
  ListItem,
  Platform
} from "react-native";
import axios from "axios";

export default class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("https://ardwtalabapp.herokuapp.com/posts/API/data")
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log({ message: err.message }));
  }

  render() {
    return (
      <>
        <View>
          <ScrollView>
            <View
              style={{
                marginTop: 100,
                flexWrap: "wrap",
                flexDirection: "row"
              }}
            >
              {this.state.posts.map(post => 
              {
                return (
                <Image
                  source={{ uri: post.imgUrl }}
                  style={{ width: 100, height: 100 }}
                />
              )})}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

Home.navigationOptions = {
  title: "Home"
};
