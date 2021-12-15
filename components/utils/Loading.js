const Loading = () => {
  return (
    <>
      <br />
      <div data-cy="loading-image" style={{"minHeight": "80vh", "display":"flex", "justifyContent"
    :"center", "alignItems":"center"}}>
        <img width="250px" src="https://i.pinimg.com/originals/8a/69/8f/8a698f09c9c4982662767b1dc116e385.gif" alt="loading"/>
      </div>
    </>
  )
}

export default Loading