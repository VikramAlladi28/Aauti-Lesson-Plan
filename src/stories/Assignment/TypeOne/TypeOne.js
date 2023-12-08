const TypeOne = (props) => {
  console.log('props', props)
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <h5 style={{ marginBottom: 10 }}>Assignment Creation</h5>
      <h5 style={{ marginBottom: 10 }}>Question : </h5>
      <textarea
        style={{
          height: 200,
          borderColor: 'lightgray',
          borderRadius: 5,
          marginTop: 10,
          padding: 5,
          maxHeight: 100,
          minHeight: 100,
          minWidth: '99.5%',
          maxWidth: '99.5%',
          outline: 'none',
        }}
        name='Question'
        placeholder='Question'
        // value={
        //   input === 'topic' ? each.topicDescription : each.subTopicDescription
        // }
        // onChange={(e) =>
        //   input === 'topic'
        //     ? onChangeTopicInputs(e.target.value, 'topicDescription')
        //     : onChangeSubTopicInputs(e.target.value, 'subTopicDescription')
        // }
      ></textarea>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 20,
          marginTop: 10,
        }}
      >
        <h5>Points : </h5>
        <input type='number' style={{ marginLeft: 10 }} />
      </div>
    </div>
  )
}

export default TypeOne
