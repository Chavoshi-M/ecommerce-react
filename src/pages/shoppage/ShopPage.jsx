import React, { Component } from 'react';
import './Shop.scss'
import SHOP_DATA from './data.js'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
class ShopPage extends Component {
	constructor(props){
		super(props);
		this.state={
			collections: SHOP_DATA
		}
	}
	render() {
		const {collections}=this.state;
		return (
			<div className='shop-page'>
				{collections.map(({id,...collection})=>(
					<PreviewCollection  key={id} {...collection}/>
				))}
			</div>
		);
	}
}

export default ShopPage;