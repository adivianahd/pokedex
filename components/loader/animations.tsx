import React from 'react';
import {Animated} from 'react-native';

export const rotateInterpolation = (animated: Animated.Value) => ({
  rotate: animated.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['180deg', '360deg', '540deg'],
  }),
});

export const rotate = (animated: Animated.Value, loading: boolean) => {
  animated.setValue(0);
  Animated.timing(animated, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  }).start(() => !!loading && rotate(animated, loading));
};

export const fadeIn = (animated: Animated.Value) => {
  animated.setValue(1);
  Animated.timing(animated, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = (loading: boolean) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  Animated.timing(fadeAnim, {
    toValue: 1 ,
    duration: 2000,
    useNativeDriver: true,
  }).start(()=> !loading);
};
