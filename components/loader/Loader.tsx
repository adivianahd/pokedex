import React from 'react';
import { Animated } from 'react-native';
import {
StyleLoader,
White,
Red,
CircleRed,
CircleWhite,
Pokebowl
} from './styles';
import { rotate, rotateInterpolation, fadeOut } from "./animations"

const Loader = () => {
  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const loading: boolean = false;

  React.useEffect(() => rotate(rotateAnim , loading), [rotateAnim]);

  return (
    <>
      <StyleLoader>
        <Red>
          <CircleWhite />
        </Red>
        <White>
          <CircleRed />
        </White>
        <Pokebowl
          style={{
            transform: [rotateInterpolation(rotateAnim)],
          }}
          loading={loading}
          >
          <CircleWhite />
          <CircleRed />
        </Pokebowl>
      </StyleLoader>
    </>
  );
};

export default Loader;

