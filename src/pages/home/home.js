import React, {useCallback, useContext, useLayoutEffect, useState} from 'react';
import {AppState, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ComprasItem from '../../components/ComprasItem/ComprasItem';
import styles from './styles';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../context/authContext';
import api from '../../service/api';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header/Header'

const Home = ({navigation}) => {
  const {setUsuario} = useContext(AuthContext);
  const [listaCompras, setListaCompras] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function getLista() {
        try {
          const response = await api.get('/produto');
          setListaCompras(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getLista();
    }, []),
  );

 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <FontAwesome name="search" size={25} color={'white'} />
        </TouchableOpacity>
      ),

      headerLeft: () => (
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.openDrawer()}>
          <FontAwesome name="bars" size={25} color={'white'}/>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{  backgroundColor:'#ffffffff'}}>
            <Text style={styles.titleList}>PRODUTOS</Text>
          </View>
        )}
        data={listaCompras}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.fotoLink}}  />
            <ItemSeparator />
            <View style={styles.textContainer}>
              <Text style={{color:'#1295A7', fontSize:25,  fontFamily:'Roboto-Light'}}>{item.nome} </Text>
              <Text style={{color:'#1295A7',fontSize:20, fontFamily:'Roboto-Light'}}>{item.descricao} </Text>
              <ItemSeparator />

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 5,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',fontSize:20
                    
                  }}>
                 <Text style={{color:'#1295A7',fontSize:25}}>R$</Text>
                  <Text style={{color:'#1295A7', fontSize:25, marginLeft:2 }}>{item.valor}
                  <Text style={{color:'#1295A7',fontSize:25}}>,00</Text>
                  

          </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.containerAddKart}>
                    <Text style={{color:'#1295A7',fontWeight:'bold' }}>ADD TO KART</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </>
  );
};

export default Home;
