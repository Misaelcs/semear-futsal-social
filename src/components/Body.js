function Body(props) {
  return (
    props.sections.forEach(section => {
      <ContentSection section={section}/>
    })
  )
}
