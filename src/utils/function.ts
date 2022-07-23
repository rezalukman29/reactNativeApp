// export const addIcon = (arr: any) => {
//     let result = arr.map((item: any) => {
//         let Hotel = require(`../../assets/icon/category/Hotel.png`)
//         let Entertainment = require(`../../assets/icon/category/Entertainment.png`)
//         let Attraction = require(`../../assets/icon/category/Attraction.png`)
//         let Culinairy = require(`../../assets/icon/category/Culinairy.png`)
//         let Coffe = require(`../../assets/icon/category/Coffe.png`)
//         let KampungWisata = require(`../../assets/icon/category/KampungWisata.png`)
//         let DesaWisata = require(`../../assets/icon/category/DesaWisata.png`)
//         let Heritage = require(`../../assets/icon/category/Heritage.png`)
//         let Shopping = require(`../../assets/icon/category/Shopping.png`)
//         let Transportation = require(`../../assets/icon/category/Transportation.png`)
//         let Event = require(`../../assets/icon/category/Event.png`)
//         let ThemePark = require(`../../assets/icon/category/ThemePark.png`)
//         let Alam = require(`../../assets/icon/category/Alam.png`)
//         let Beverages = require(`../../assets/icon/category/Beverages.png`)
//         return {
//             ...item,
//             // icon: 'https://picsum.photos/200'
//             icon: item.name === 'Akomodasi' ? Hotel :
//                 item.name === 'Alam' ? Alam :
//                     item.name === 'Desa Wisata' ? DesaWisata :
//                         item.name === 'Theme Park' ? ThemePark :
//                             item.name === 'Heritage' ? Heritage :
//                                 item.name === 'Entertainment' ? Entertainment :
//                                     item.name === 'Food' ? Beverages :
//                                         item.name === 'Transportation' ? Transportation :
//                                             item.name === 'Shopping' ? Shopping : Event


//         }
//     })
//     return result
// }

import RNLocation from 'react-native-location';

RNLocation.configure({
    distanceFilter: 5.0
})

export function getRandomLightColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


export const getLocationPermission = async () => {
    let permission = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
            detail: 'coarse' // or 'fine'
        }
    });
    if (!permission) {
        permission = await RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse",
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        })
    }
    return permission
}

export const getLocation = async () => {
    try {
        let location: any;
        location = await RNLocation.getLatestLocation({ timeout: 100 })
        return Promise.resolve({
            latitude: location.latitude,
            longitudeL: location.longitude
        })
    } catch (error: any) {

    }

}


