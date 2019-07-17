import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import Line from "../components/Line";
import LongText from "../components/LongText";

const SerieDetailPage = props => {
    const { serie } = props.navigation.state.params
    return (
        <ScrollView>
            {
                serie.img
                    ? <Image
                        style={styles.image}
                        source={{
                            uri: serie.img
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
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image: {

    }
});

export default SerieDetailPage;
