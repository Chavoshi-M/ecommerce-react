import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/Directory/selectors';   
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss'


const Directory = props=>{
 
	return(
		<div className="directory-menu">
			{
				props.sections.map(({id,...sectionprops})=>
					<MenuItem key={id} {...sectionprops}/>
				)
			}
		</div> 
	)
}
const mapStateToProps = createStructuredSelector({
	sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);	