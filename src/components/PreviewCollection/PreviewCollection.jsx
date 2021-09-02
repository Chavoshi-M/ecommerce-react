import CollectionItem from '../CollectionItem/CollectionItem';
import './PreviewCollection.scss'
const PreviewCollection = ({title,items}) => {
	return (
		<div className='collection-preview'>
			<h1>{title}</h1>
			<div className='preview'>
				{items.filter((item,index)=>index<4).map((item)=>(
					<CollectionItem key={item.id} item={item}/>
				))}
			</div>
		</div>
	);
}
 
export default PreviewCollection;