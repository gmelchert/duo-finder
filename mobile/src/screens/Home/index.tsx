import { View, Image, FlatList } from 'react-native';
import { useEffect } from 'react';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';


export function Home() {
  useEffect(() => {
    fetch('192.168.15.53:3333/games')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }).catch(err => console.log('err:',))
  }, [])

  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

      <FlatList
        style={styles.contentList}
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
      />
      
    </View>
  );
}