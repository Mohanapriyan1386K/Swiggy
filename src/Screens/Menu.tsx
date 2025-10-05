import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../CoustomComponent/CustomHeader';
import { imagesConstent, foodData } from '../Utility/Constents';
import CustomSearchBox from '../CoustomComponent/CustomSearchBox';
import { useFormik } from 'formik';
import CustomButton from '../CoustomComponent/CustomButton';

export default function Menu() {
   const [selectedId, setSelectedId] = useState('1')
  const defaultValues = { search: '' };

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        location="SNS KALVI NAGAR COIMBATORE"
        // Secondrhead='SEARCH'
        cartCount={3}
        onMenuPress={() => console.log('Menu pressed')}
        onLocationPress={() => console.log('Location pressed')}
        onCartPress={() => console.log('Cart pressed')}
        menuImage={imagesConstent.MenuIcon}
        cartImage={imagesConstent.AddToCart}
        headerText="DELIVERY TO"
      />
      <View style={{marginTop: 20 }}>
        <Text style={{ fontFamily: 'Poppins-Black',paddingHorizontal:20}}>
          HI MOHANPRIYAN ,{' '}
          <Text style={{ fontFamily: 'Anton-Regular' }}>Good Afternoon</Text>
        </Text>
        <View style={{ marginTop: 20 }}>
          <CustomSearchBox
            value={values.search}
            onChangeText={text => setFieldValue('search', text)}
            searchImage={imagesConstent.Search}
            clearImage={imagesConstent.Clear}
            onClear={() => setFieldValue('search', '')}
            placeholder="Seacrch dishes, rdeedesturant"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal:20
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-ExtraBoldItalic',
              color: 'gray',
            }}
          >
            All Catagrios
          </Text>
          <CustomButton
            title="See All"
            variant="text"
            textStyle={{ color: 'gray' }}
          />
        </View>
        <View>
            <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {foodData.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7} // touch opacity
          onPress={() => setSelectedId(item.id)}
        >
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: selectedId === item.id ? '#ffd90091' : '#fff' }, // highlight selected
            ]}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.text, { color: selectedId === item.id ? '#000' : '#000' }]}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fffcfcc5',
  },

  box: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
scrollContainer: {
    paddingHorizontal: 10,
    height:100,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    elevation: 10,
    shadowColor: '#000',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
