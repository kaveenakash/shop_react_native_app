import React from 'react'
import {FlatList,Text} from 'react-native'
import {useSelector} from 'react-redux'

const ProductOverviewScreen = props =>{
    const products = useSelector(state => state.products.availableProducts)
    return(
        <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>}/>
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle:'All Products'
}

export default ProductOverviewScreen;