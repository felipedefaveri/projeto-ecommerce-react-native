import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listagem: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor:'#ffffffff',
    borderWidth: 1.5,
    borderColor: '#AAAaaa',

    borderRadius: 10,
    width: '90%',
    height:'90%',
    alignContent: 'center',
    alignSelf: 'center',
   
    
  },
  image: {
    flexDirection: 'column',
    width: '100%',
    height:270,
    alignSelf: 'center',
    borderRadius: 10,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    resizeMode: 'stretch',

  },
  textContainer: {flex: 1, marginStart: 10, marginBottom: 10, color:'#152536', fontSize:25, },
  titleList:{
      fontSize:25,
      color: '#1295A7',
      margin:3,
      backgroundColor:'#ffffffff',
      elevation:3,
      padding:10,
      width:'100%',
      fontFamily:'Roboto-Light'
      },
  textAddKart:{
    fontSize:17,fontFamily:'Roboto-medium'
  },
  containerAddKart:{
    textAlign: 'center',
    marginLeft: 50,
    borderWidth: 1.5,
    borderColor: '#AAA',
    borderRadius: 5,
    padding: 5,
    color:'#1295A7'
  }
});

export default styles;
