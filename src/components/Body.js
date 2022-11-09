import ContentSection from './ContentSection.js';

function Body(props) {
  for (const i in props.data) {
    return <ContentSection data={props.data[i]}/>
  }
}

export default Body;
