import {
    View, Text, StyleSheet,
    ScrollView, SafeAreaView, Platform,
    Image
}
    from "react-native"


export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {

    return (

        <View style={styles.card}>
            <View style={styles.nameAndHpWrapper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>💜{hp}</Text>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={image}
                    resizeMode="contain"
                    accessibilityLabel={`${name} Pokemon`}
                />
            </View>

            <View>
                <Text style={styles.type}>{type}</Text>
            </View>

            <View>
                <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
            </View>
            <View>
                <Text
                    style={styles.weaknesses}
                >Weaknesses: {weaknesses.join(", ")}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameAndHpWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,

    },
    moves: {

    },
    weaknesses: {

    },
})