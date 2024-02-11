import { useState, useEffect } from "react"
import {
    View, Text, StyleSheet,
    FlatList, StatusBar, ActivityIndicator, SafeAreaView
} from "react-native"



export default function Fetcher() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    async function postsFetcher(limit = 5) {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=15`

        const response = await fetch(url)
        const Data = await response.json()

        console.log(Data);
        setPosts(Data)
        setIsLoading(false)
    }

    useEffect(() => { postsFetcher() }, [])

    function handleRefresh() {
        setRefresh(true)
        postsFetcher(15)
        setRefresh(false)
    }


    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} color={"blue"} />
                <Text>Loading....</Text>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.id}>{item.id}</Text>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    )
                }}
                ListEmptyComponent={<Text>No Posts Avilable</Text>}
                ListHeaderComponent={<Text style={styles.title}>Posts List</Text>}
                ListFooterComponent={<Text style={styles.title}>End of posts list</Text>}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 16 }}></View>
                )}
                refreshing={refresh}
                onRefresh={handleRefresh}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: "grey",
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight

    },
    title: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 8
    },
    card: {
        backgroundColor: "white",
        padding: 14,
        borderWidth: 8,
        borderRadius: 1
    },
    titleText: {
        fontSize: 24
    },
    bodyText: {
        fontSize: 24,
        color: "#666666"
    }
    ,
    loadingContainer: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    }
})