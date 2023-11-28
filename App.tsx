import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';
import React, { Children } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const gray = "#91A1BD";

const App = () => {

  const Neumorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View style={[styles.inner, { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2, alignItems: "center", justifyContent: "center" },
            style
          ]}
          >
            {children}
          </View>

        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}
        >
          <View style={styles.topContainer}>

            {/* Back arrow icon */}
            <TouchableOpacity>
              <Neumorph size={48}>
                <AntDesign color={gray} name="arrowleft" size={20}></AntDesign>
              </Neumorph>
            </TouchableOpacity>


            {/* Title */}
            <View>
              <Text style={styles.playing}>PLAYING NOW</Text>
            </View>

            {/* Menu Icon */}
            <TouchableOpacity>
              <Neumorph size={48} >
                <Entypo color={gray} name="menu" size={20}></Entypo>
              </Neumorph>
            </TouchableOpacity>


          </View>
          <View style={styles.songArtContainer}>
            <Neumorph size={250}>
              <Image
                source={require('./assets/images/flowerArt.jpg')}
                style={styles.songArt} />
            </Neumorph>
          </View>

          <View style={styles.songContainer}>
            <Text style={styles.songTitle}>Song Title</Text>
            <Text style={styles.songArtist}>Artist Name ft. IamMT</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.time}>1:21</Text>
              <Text style={styles.time}>3:46</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#DAE6F4"
              thumbTintColor='#7B9BFF'
            ></Slider>
          </View>

          <View style={styles.controlsContainer}>
            <TouchableOpacity>
              <Neumorph size={65}>
              <AntDesign color={gray} name="banckward" size={20}></AntDesign>

              </Neumorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neumorph size={65} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }}>
                <FontAwesome6 name="pause" size={30} color="white"></FontAwesome6>
              </Neumorph>
            </TouchableOpacity>

            <TouchableOpacity>
              <Neumorph size={65}>
              <AntDesign color={gray} name="forward" size={20}></AntDesign>
              </Neumorph>
            </TouchableOpacity>
          </View>

          <View style={styles.volumeContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <FontAwesome6 name="volume-off" size={20} color="white"></FontAwesome6>
            </View>
              <Slider
              style={{width: 250}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#DAE6F4"
              thumbTintColor='#7B9BFF'
              
            ></Slider>
            <View>
               <FontAwesome6 name="volume-high" size={20} color="white"></FontAwesome6>
            </View>
           
          </View>

          

        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: "center"
  },
  topContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'

  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#E2ECFD"

  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD'
  },
  playing: {
    color: gray,
    fontWeight: "800"
  },
  songArtContainer: {
    marginHorizontal: '10%',
    alignItems: 'center',
    marginTop: '10%'
  },
  songArt: {
    width: 250,
    height: 250,
    borderRadius: 123,
    borderWidth: 10,
    borderColor: '#D7E1F3',
  },
  songContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  songTitle: {
    fontSize: 30,
    color: '#6C7A93',
    fontWeight: '600'
  },
  songArtist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: '500'
  },
  trackContainer: {
    marginTop: '10%',
    marginBottom: '10%'

  },
  volumeContainer:{
    marginTop: '10%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 15,
    color: gray
  },
  controlsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
})
export default App