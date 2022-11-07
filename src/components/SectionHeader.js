const SectionHeader = (props) => {
  return (
    <>
    <h2>{data.section[props.index].header.title}</h2>
    <h3>{data.section[props.index].header.subtitle}</h3>
    <img src={require(data.section[props.index].header.imageSrc)} className='section-header-img' alt=""/>
    </>
  );
}

export default SectionHeader;