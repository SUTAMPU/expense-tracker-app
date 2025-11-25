import { Tabs } from "expo-router";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

import ContextProvider from "@/store/expense-context";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import Overlay from "../components/overlay/overlay";
import { GlobalStyles } from "../constants/global-styles";
const addIcon = require("../../assets/images/add-icon.png");
const eggIcon = require("../../assets/images/egg-icon.png");

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ContextProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              // Move inwards
              position: "absolute",
              left: 20,
              right: 20,
              borderRadius: 25,
              paddingHorizontal: 30,
              // Shadow
              boxShadow: [
                {
                  offsetX: 0,
                  offsetY: 0,
                  blurRadius: 10,
                  color: "rgba(0, 0, 0, 0.25)",
                },
              ],
            },
          }}
        >
          {/* Tab screens and icons */}
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // Centering
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: focused ? 15 : 25,
                  }}
                >
                  <Octicons
                    name="home-fill"
                    size={18}
                    color={focused ? "black" : GlobalStyles.colours.gray}
                  />
                  {focused && (
                    <View
                      style={{
                        // Dot
                        width: 6,
                        height: 6,
                        backgroundColor: "black",
                        borderRadius: 100,
                        marginTop: 8,
                      }}
                    ></View>
                  )}
                </View>
              ),
            }}
          />

          <Tabs.Screen
            name="empty"
            options={{
              headerShown: false,
              tabBarButton: () => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <ImageBackground
                      source={eggIcon}
                      style={{
                        width: 65,
                        height: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 40,
                      }}
                    >
                      <Image
                        source={addIcon}
                        style={{
                          width: 22,
                          height: 22,
                        }}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Tabs.Screen
            name="history"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // Centering
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: focused ? 15 : 25,
                  }}
                >
                  <Octicons
                    name="clock-fill"
                    size={18}
                    color={focused ? "black" : GlobalStyles.colours.gray}
                  />
                  {focused && (
                    <View
                      style={{
                        // Dot
                        width: 6,
                        height: 6,
                        backgroundColor: "black",
                        borderRadius: 100,
                        marginTop: 8,
                      }}
                    ></View>
                  )}
                </View>
              ),
            }}
          />
        </Tabs>

        {modalVisible && (
          <Overlay
            mode="add"
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        )}
      </ContextProvider>
    </>
  );
}
