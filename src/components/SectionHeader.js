const SectionHeader = (props) => {
  return (
    <>
    <h2>{props.titulo}</h2>
    <h3>{props.subtitulo}</h3>
    <img htmlSrc={props.imageSrc} className='section-header-img' alt=""/>
    </>
  );
}

export default SectionHeader;