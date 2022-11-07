import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';

const ContentSection = (props) => {
  return (
	<div className='content-section'>
		<SectionHeader index={props.section.header}/>
		<SectionBody index={props.index}/>
	</div>
  )
}

export default ContentSection;