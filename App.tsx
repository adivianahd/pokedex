import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Loader from './components/loader/Loader';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Loader />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
