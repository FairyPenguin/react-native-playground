import { useState, useEffect } from "react"
import {
    View, Text, StyleSheet,
    FlatList, StatusBar, ActivityIndicator,
    SafeAreaView, TextInput, Button
} from "react-native"



export default function Fetcher() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [postingState, setpostingState] = useState(false)




    async function postsFetcher(limit = 5) {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=15`

        const response = await fetch(url)
        const Data = await response.json()
        console.log(Data);
        setPosts(Data)
        setIsLoading(false)
    }



    function handleRefresh() {
        setRefresh(true)
        postsFetcher(15)
        setRefresh(false)
    }


    async function addPost() {
        setpostingState(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
            }),
        })
        // New Post
        const newPost = await response.json()
        console.log(newPost);
        setPosts([newPost, ...posts])
        setPostTitle("")
        setPostBody("")
        setpostingState(false)
    }

    useEffect(() => { postsFetcher() }, [])


    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} color={"blue"} />
                <Text>Loading....</Text>
            </SafeAreaView>
        )
    }

    return (

        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="enter title"
                    value={postTitle}
                    onChangeText={setPostTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="enter Body"
                    value={postBody}
                    onChangeText={setPostBody}
                />
                <Button
                    title={postingState ? "Submiting..." : "Add New Post"}
                    onPress={addPost}
                    disabled={postingState}
                />
            </View>
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
        </>
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
    },
    input: {
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 8,
        margin: 14,
        borderWidth: 1,
        borderRadius: 4,
    }
})