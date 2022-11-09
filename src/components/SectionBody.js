const SectionBody = (props) => {
      for (const i in props.data.paragraphs) {
        console.log(props.data.paragraphs[i])
       return (
        <>
          {props.data.paragraphs[i].emphasis != undefined ? <p>{props.data.paragraphs[i].emphasis}</p> : null}
          <p>{props.data.paragraphs[i].text}</p>
          <img src={props.data.paragraphs[i].imageSrc} alt="logo"/>
        </>  
       )
      };
}

export default SectionBody;