import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack' 
import {Platform} from 'react-native'

import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'

const ProductNavigator = createStackNavigator({
    ProductsOverview:ProductOverviewScreen
},{
    defaultNavigationoptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary:''
        },
        headerTintColor:Platform.OS === 'android' ? 'white':Colors.primary
    }
})


export default createAppContainer(ProductNavigator)