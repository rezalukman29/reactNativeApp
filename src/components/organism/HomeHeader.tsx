// React Native
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, PADDING, SIZES } from "../../theme/config";
import assets from "../../assets/assets/assets";
import * as React from 'react';
import useTheme from "../../theme/useTheme";
import useThemedStyles from "../../theme/useThemedStyles";
import images from "../../assets/old";
import IconButton from "../../components/atoms/button/IconButton";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParams } from "../../navigation/AppTabNavigator";
// Constants


const HomeHeader = ({ onSearch }: any) => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme?.colors.BACKGROUND,
        padding: PADDING.medium,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={theme?.isLightTheme ? images.WanderLight
          : images.WanderDark
        } style={{ width: 110, height: 35, resizeMode: 'stretch' }} />

        <View style={{ width: 45, height: 45 }}>
          <IconButton profilePicture uri={images.User} onPress={() => {
            navigation.openDrawer();
          }} />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: theme?.colors.TEXT,
            }}
          >
            Hello, 
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: theme?.colors.PRIMARY,
            }}
          >
             rezalukman29 👋
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: theme?.colors.TEXT,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's explore some masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: theme?.colors.SECONDARY,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            height: 60
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Anything"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View >
  );
};

export default HomeHeader;