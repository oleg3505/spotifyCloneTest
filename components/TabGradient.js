import { LinearGradient } from 'expo-linear-gradient';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';

export function TabGradient(props) {
  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.1)', 'black']}
      start={[0, 0]}
      end={[0, 1]}
      locations={[0, 0.8]}
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      <BottomTabBar
        {...props}
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
        }}
      ></BottomTabBar>
    </LinearGradient>
  );
}
