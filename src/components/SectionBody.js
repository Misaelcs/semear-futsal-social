const SectionBody = (props) => {
  return (
    <div className={'section-body ' + data.section.name}>
      {data.section[props.index].paragraphs.forEach(paragraph => {
        <>
          if(paragraph.emphasis){
              <p className='section-body-emphasis'>{paragraph.emphasis}</p>
          }
          <p className='section-body-text'>{paragraph.text}</p>
          <img src={require(paragraph.imageSrc)} className='section-body-image' alt="logo"/>
        </>  
      })};
    </div>
  );
}

export default SectionBody;