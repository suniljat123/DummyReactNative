/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCard from './Components/FlatCard';
import EvalatedCards from './Components/EvalatedCards';
import Images from './Components/Images';
import Contacts from './Components/Contacts';
   
function App(): JSX.Element { 
  return (
    <SafeAreaView  >
      <ScrollView>
      <View>
       <FlatCard/>
       <EvalatedCards/>
       <Images/>
       <Contacts/>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   
});

export default App;
