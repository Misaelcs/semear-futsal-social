const SectionBody = (props) => {
  return (
    <div className={'section-body ' + props.section}>
      {props.section.paragraphs.forEach(paragraph => {
        <>
          if(paragraph.emphasis){
              <p className='section-body-emphasis'>{paragraph.emphasis}</p>
          }
          <p className='section-body-text'>{paragraph.text}</p>
          <img htmlSrc={paragraph.imageSrc} className='section-body-image'/>
        </>  
      })};
    </div>
  );
}

export default SectionBody;