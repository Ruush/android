import React from "react";
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
import { connect } from 'react-redux';

import Line from "../components/Line";
import LongText from "../components/LongText";
import { deleteSerie } from "../actions/seriesActions";

class SerieDetailPage extends React.Component {
    render() {
        const { navigation, deleteSerie } = this.props;
        const { serie } = navigation.state.params;

        return (
            <ScrollView>
                {
                    serie.img64
                        ? <Image
                            style={styles.image}
                            source={{
                                uri: `data:image/jpeg;base64,${serie.img64}`
                            }}
                            aspectRatio={1}
                            resizeMode="stretch"
                        />
                        : <Image
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" }}
                            aspectRatio={1}
                            resizeMode="stretch"            //ou container
                        />
                }
                <Line label="Título" content={serie.title} />
                <Line label="Gênero" content={serie.gender} />
                <Line label="Nota" content={serie.rate} />
                <LongText label="Descrição" content={serie.description} />

                <View style={styles.button}>
                    <Button
                        title="Editar"
                        onPress={() => navigation.replace("SerieForm", { serieToEdit: serie })}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color="#FF0004FF"
                        title="Deletar"
                        onPress={async () => {
                            const hasDeleted = await deleteSerie(serie);
                            if (hasDeleted) {
                                navigation.goBack()
                            }
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        width: "100%"
    },
    button: {
        margin: 10,
    }
});

export default connect(null, { deleteSerie })(SerieDetailPage);
