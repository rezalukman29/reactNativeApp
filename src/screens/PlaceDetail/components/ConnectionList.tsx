import React, { forwardRef, memo, useCallback } from "react";
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleSheet,Text
} from "react-native";
import Animated from "react-native-reanimated";
import ConnectionItem from "./ConnectionItem";
import { Connection } from "../types/Connection";
import { View } from "react-native-animatable";

export const AnimatedFlatList: typeof FlatList = Animated.createAnimatedComponent(
  FlatList,
);

interface PlacesInfoProps {
  item: any
}

type Props = Omit<FlatListProps<Connection>, "renderItem">;

const ConnectionList = forwardRef<FlatList, Props>((props, ref) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback<ListRenderItem<Connection>>(
    ({ item }) => <PlacesInfo item={item} />,
    []
  );

  const PlacesInfo = ({ item }: PlacesInfoProps) => {
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <AnimatedFlatList
      ref={ref}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default memo(ConnectionList);
