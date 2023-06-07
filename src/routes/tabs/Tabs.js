import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../constants";
import HomeScreen from "../../screens/user/HomeScreen";
import UserProfileScreen from "../../screens/profile/UserProfileScreen";
import MyOrderScreen from "../../screens/user/MyOrderScreen";
import CategoriesScreen from "../../screens/user/CategoriesScreen";
import HomeIconActive from "../../assets/icons/bar_home_icon_active.png";
import HomeIcon from "../../assets/icons/bar_home_icon.png";
import userIcon from "../../assets/icons/bar_profile_icon.png";
import userIconActive from "../../assets/icons/bar_profile_icon_active.png";

const Tab = createBottomTabNavigator();

const Tabs = ({ route }) => {
  const { user } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,

        tabBarIcon: ({ focused }) => {
          let routename = route.name;
          if (routename == "home") {
            return (
              <TouchableOpacity disabled>
                {focused == true ? (
                  <Image
                    source={HomeIconActive}
                  />
                ) : (
                  <Image source={HomeIcon} />
                )}
              </TouchableOpacity>
            );
          } else if (routename == "categories") {
            return (
              <TouchableOpacity disabled>
                {focused == true ? (
                  <Ionicons
                    name="ios-apps-sharp"
                    size={29}
                    color={colors.primary}
                  />
                ) : (
                  <Ionicons
                    name="ios-apps-sharp"
                    size={29}
                    color={colors.muted}
                  />
                )}
              </TouchableOpacity>
            );
          } else if (routename == "myorder") {
            return (
              <TouchableOpacity disabled>
                {focused == true ? (
                  <Ionicons
                    name="cart-outline"
                    size={29}
                    color={colors.primary}
                  />
                ) : (
                  <Ionicons
                    name="cart-outline"
                    size={29}
                    color={colors.muted}
                  />
                )}
              </TouchableOpacity>
            );
          } else if (routename == "user") {
            return (
              <TouchableOpacity disabled>
                {focused == true ? (
                  <Image
                    source={userIconActive}
                  />
                ) : (
                  <Image source={userIcon} />
                )}
              </TouchableOpacity>
            );
          }
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white,
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        initialParams={{ user: user }}
        tabBarOptions={{
          style: {
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name="categories"
        component={CategoriesScreen}
        initialParams={{ user: user }}
        tabBarOptions={{
          tabBarHideOnKeyboard: true,
          style: {
            position: "absolute",
          },
        }}
      />
      {
        <Tab.Screen
          name="myorder"
          component={MyOrderScreen}
          initialParams={{ user: user }}
        />
      }
      <Tab.Screen
        name="user"
        component={UserProfileScreen}
        initialParams={{ user: user }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
