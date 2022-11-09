import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';

const ContentSection = (props) => {
	console.log(props);
  return (
		<div className='content-section'>
			<SectionHeader data={props.data.header}/>
			<SectionBody data={props.data.body}/>
		</div>
  )
}

export default ContentSection;