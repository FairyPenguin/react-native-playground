import {
    View, Text, StyleSheet, Platform, Image
}
    from "react-native"

function getTypeStyles(type) {

    switch (type.toLowerCase()) {

        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };

        case "water":
            console.log("Water")
            return { borderColor: "#6493EA", emoji: "💧" };

        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };

        case "grass":
            return { borderColor: "#66CC66", emoji: "🍃" };

        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }

}

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {

    const { borderColor, emoji } = getTypeStyles(type)

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

            <View style={styles.type}>
                <View style={[styles.typeBadge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeTitle}>{type}</Text>
                </View>
            </View>

            <View style={styles.moves}>
                <Text style={styles.movesTitle}>Moves: {moves.join(", ")}</Text>
            </View>
            <View style={styles.weaknesses}>
                <Text
                    style={styles.weaknessesTitle}
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
        marginHorizontal: 4,
        marginVertical: 12,
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
    type: {
        marginBottom: 30,
        alignItems: "center"
    },
    typeBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
        gap: 10

    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeTitle: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1
    },

    moves: {
        marginBottom: 16
    },
    movesTitle: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknesses: {
        marginBottom: 16

    },
    weaknessesTitle: {
        fontSize: 22,
        fontWeight: "bold"
    }
})