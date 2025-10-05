import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface CustomHeaderProps {
  location?: string;
  cartCount?: number;
  onLocationPress?: () => void;
  onCartPress?: () => void;
  onMenuPress?: () => void;
  menuImage?: ImageSourcePropType;
  cartImage?: ImageSourcePropType;
  headerText?: string;
  Secondrhead?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  location,
  cartCount = 0,
  onLocationPress,
  onCartPress,
  onMenuPress,
  menuImage,
  cartImage,
  headerText,
  Secondrhead,
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Menu */}
      <TouchableOpacity onPress={onMenuPress} style={styles.leftContainer}>
        <View style={{backgroundColor:"#ecf0f4",padding:10,borderRadius:50}}>
          {menuImage && (
            <Image
              source={menuImage}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          )}
        </View>
      </TouchableOpacity>

      {/* Center: Header Text & Location */}
      <View style={styles.centerContainer}>
        {headerText && <Text style={styles.headerText}>{headerText}</Text>}
        {location && <Text style={styles.locationText}>{location}</Text>}
        {Secondrhead && <Text style={styles.Secondrhead}>{Secondrhead}</Text>}
      </View>

      {/* Right: Cart */}
      <TouchableOpacity onPress={onCartPress} style={styles.rightContainer}>
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
        {cartImage && (
          <Image
            source={cartImage}
            style={styles.cartIcon}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 25,
    height: 25,
    borderRadius: 50,
    padding: 5,
  },
  cartIcon: {
    width: 35,
    height: 35,
  },
  headerText: {
    color: 'orange',
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationText: {
    color: '#555',
    fontSize: 12,
  },
  Secondrhead: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 2,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f25c05',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
