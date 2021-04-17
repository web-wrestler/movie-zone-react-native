// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, FlatList, StatusBar } from 'react-native';
import { Navbar } from './src/Navbar';
import { Card } from './src/Card';

import * as api from './src/utils/Api';

export default function App() {
  const [films, setFilms] = useState([]);

    // получаем всех пользователей
    const handleGetFilms = () => {
      api.getFilms()
      .then(res => {
     
        setFilms(res
          .map(film => ({
            name: film.name,
            date: film.date,
            link: film.link,
            genres: film.genres,
            country: film.country,
            director: film.director,
            actors: film.actors,
            checked: film.checked,
            totalRange: film.totalRange,
            id: film._id,
            owner: film.owner
          })));

      })
      .catch((err) => console.error(err));
      }

    useEffect(() => {
      console.log('useEffect')
      handleGetFilms();
    }, [])


  return ( 
    // <ScrollView >
   <View style={styles.container}> 
     <StatusBar
    barStyle = "light-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    backgroundColor = "#000"
    //Background color of statusBar only works for Android
    translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>
     <Navbar title={'Movie Zone'}/>
     <FlatList 
          keyExtractor={item=>item.id.toString()}
          data={films}  
          renderItem={({item}) => <Card film={item} />}
      />
   </View>
    //  <View style={styles.container}> 
    //   {
    //     films.map(film => (<Card film={film} key={film.id} />))
    //   }
    //  </View>     
        
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexWrap: "wrap",
    backgroundColor: '#ddd',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 30
  },
  text: {
    fontSize: 24,
    color: 'blue',
    marginTop: 24
  },
});
