import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import PlaceCard from '../../molecules/card/PlaceCard';



interface PlacesByCategoryProps {
    data: any,
    isLoading: boolean,
    toPlaceDetail: (data: any) => void;
}

const PlacesByCategory = ({ data, isLoading, toPlaceDetail }: PlacesByCategoryProps) => {
    return (
        <View style={styles.container}>
            {/* {isLoading && <Label type="title">Loading</Label>} */}
            {Array.isArray(data.items) && data.items.length == 2 ? (
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={data.items}
                    renderItem={({ item, index }: any) => (
                        <PlaceCard item={item} index={index} toPlaceDetail={toPlaceDetail}/>
                    )}
                    keyExtractor={(item: any) => item.id}
                    numColumns={1}
                />
            ) : (
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={data.items}
                    renderItem={({ item, index }: any) => (
                        <PlaceCard item={item} index={index} toPlaceDetail={toPlaceDetail}/>
                    )}
                    keyExtractor={(item: any) => item.id}
                    numColumns={2}
                />
            )}
        </View>
    );
};

export default PlacesByCategory;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});
