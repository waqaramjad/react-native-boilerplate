import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Home from '../screens/home'
import Profile from '../screens/profile'
import SideMenu from '../screens/sideMenu'
import { images } from '../../assets'
import Menu from './Menu'
import Tab from './Tab'

// MARK: - StackNavigator

const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `Boilerplate`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#34495e' },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'Baskerville'
      },
      headerLeft: <Menu navigation={navigation}/>
    })
  }
})

const profileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: `Boilerplate`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#34495e' },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'Baskerville'
      }
    })
  }
})

// MARK: - TabNavigator

const tabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: homeNavigator,
    navigationOptions: { title: 'Home' }
  },
  ProfileTab: {
    screen: profileNavigator,
    navigationOptions: { title: 'Profile' }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      var source
      switch (navigation.state.routeName) {
        case 'HomeTab':
          source = images.home
          break
        case 'ProfileTab':
          source = images.user
          break
        default: break
      }
      return <Tab source={source} focused={focused}/>
    },
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      style: {
        // backgroundColor: 'white',
        // borderTopColor: '#gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      }
    },
    swipeEnabled: false
  })
})

// MARK: - DrawerNavigator

export default createDrawerNavigator({
  TabNavigator: { screen: tabNavigator },
  SideMenu: { screen: SideMenu }
},
{
  contentComponent: SideMenu,
  drawerOpenRoute: 'drawerOpen',
  drawerCloseRoute: 'drawerClose',
  drawerToggleRoute: 'drawerToggle'
})
