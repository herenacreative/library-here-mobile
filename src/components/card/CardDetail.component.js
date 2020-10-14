import React,  {useState, useEffect}  from 'react';
import { StyleSheet, View, Image, SafeAreaView, ImageBackground} from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const CardDetail = (props) => {
    const [book, setBook] = useState([])
    const [borrow, setBorrow] = useState([])

    useEffect(() => {
        console.log(props, 'props detail')
        AsyncStorage.getItem("token", (error, result) => {
            const params = props.route
            axios({
                method: 'GET',
                url: `${API.baseURL}/books/${params}`,
                headers: {
                    Authorization: result
                }
            })
                .then(res => {
                    console.log(res)
                    setBook(res.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }, [])

    return(
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <Layout style={styles.container}>
                {book.map((Book) => (   
                    <> 
                <Layout>
                    <Text style={{margin: 10}}>
                        {Book.genre_name} / {Book.author_name}
                    </Text>
                </Layout>
                <Layout style={styles.footer}>
                    <ImageBackground
                        style={styles.images}
                        source={{
                            uri: `http://192.168.1.7:8080/uploads/${Book.image}`
                        }}
                    />
                    <Layout style={{marginTop:10, marginBottom:10}}>
                         <Text key={Book.book_id} style={{fontSize:24, textAlign: 'center'}}>{Book.book_name}</Text>
                    </Layout>
                        <Layout style={{ marginTop: 10, marginBottom: 10 }}>
                        <Button style={{margin:10, height:20, borderRadius:15}}>borrow</Button>
                        
                    </Layout>
                    <Layout>
                        <Text style={{minHeight: 150, margin: 10, textAlign: 'justify'}}>{Book.description}</Text>
                    </Layout>
                </Layout> 
                </>
                ))} 
            </Layout>  
            </ScrollView>
            
        </SafeAreaView>
    </React.Fragment>     
    )
};

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    images: {
        flex: 1,
        width: 200,
        height: 300,
        // marginRight: 15,
    },
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        // alignItems: 'center',

        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#FF6C37',
        
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FF6C37',
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
    },
    textFooter: {
        color: '#2B335A',
        fontWeight: 'bold',
        fontSize: 30
    },
    form: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2B335A',
        borderBottomColor: '#2B335A',
        marginTop: 10
    }
});

export default CardDetail