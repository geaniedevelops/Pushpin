import React, { Component } from 'react';
import { Button, Platform, ScrollView, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { createNavigator, createNavigationContainer, SafeAreaView, TabRouter, addNavigationHelpers } from 'react-navigation';
import ToursScreen from '../../screens/ToursScreen';
import SearchScreen from '../../screens/SearchScreen';

const TabBar = ({ navigation }) => {
  const { routes } = navigation.state;
  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const View = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <TabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          dispatch: navigation.dispatch,
          state: routes[index],
        })}
        screenProps={{}}
      />
    </SafeAreaView>
  );
};

const Router = TabRouter(
  {
    Tours: {
      screen: ToursScreen,
      path: 'MyTours',
    },
    Search: {
      screen: SearchScreen,
      path: 'FindTours',
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Tours',
  }
);

const TourTabs = createNavigationContainer(
  createNavigator(Router)(View)
);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default TourTabs;
