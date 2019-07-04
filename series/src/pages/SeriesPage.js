import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import series from "../../series.json";
import SerieCard from "../components/SerieCard.js";
import AddSerieCard from "../components/addSerieCard.js";

const isEven = number => number % 2 === 0

const SeriesPage = props => {
    return (
        <View>
            <FlatList
                data={[...series, { isLast: true }]}
                renderItem={({ item, index }) => (
                    item.isLast ? <AddSerieCard
                        isFirstColumn={isEven(index)}
                        onPress={() => props.navigation.navigate("SerieForm")} />
                        : <SerieCard
                            serie={item}
                            isFirstColumn={isEven(index)}
                            onPress={() => props.navigation.navigate("SerieDetail", { serie: item })}
                        />
                )}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
                ListHeaderComponent={props => (<View style={styles.marginTop} />)}
                ListBottomComponent={props => (<View style={styles.marginBottom} />)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    }
});

export default SeriesPage;