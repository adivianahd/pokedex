import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const StyleLoader = styled.View`
  position: relative;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const White = styled(Animated.View)`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: #fff;
  width: 100%;
`;
export const Red = styled(Animated.View)`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  background-color: #f00;
  width: 100%;
`;
export const CircleRed = styled(Animated.View)`
  background-color: #f00;
  width: 100px;
  height: 50px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-width: 2px;
  border-top-color: #000;
  border: 4px #000;
`;
export const CircleWhite = styled(Animated.View)`
  background-color: #fff;
  width: 100px;
  height: 50px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-width: 2px;
  border-bottom-color: #000;
  border: 4px #000;
`;


interface FadeProps {
  readonly loading: boolean;
};

export const Pokebowl = styled(Animated.View)<FadeProps>`
  position: absolute;
  border-radius: 100px;
  opacity: ${p => p.loading ? 1 : 0 };

`;