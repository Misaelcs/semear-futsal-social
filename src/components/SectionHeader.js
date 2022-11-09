const SectionHeader = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <img src={props.imageSrc} className='section-header-img' alt=""/>
    </>
  );
}

export default SectionHeader;