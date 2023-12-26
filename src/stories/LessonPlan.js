import React, { useEffect, useState } from 'react'
import './LessonPlan.css'
import PropTypes from 'prop-types'
import { Editor } from './Editor'

const tempData = [
  {
    topicName: '',
    selected: false,
    topicDescription: '',
    contentData: '',
    uploadContent: [],
    subTopics: [],
  },
]
let subTopicObject = {
  subTopicName: '',
  subTopicDescription: '',
  contentData: '',
  uploadContent: [],
  selected: false,
}

let topicObject = {
  topicName: '',
  selected: false,
  topicDescription: '',
  contentData: '',
  uploadContent: [],
  subTopics: [],
}

const LessonPlan = (props) => {
  const { LessonPlanObj = tempData, onSubmit, outerSubmit } = props
  const [data, setData] = useState(LessonPlanObj)
  const [currentTopic, setCurrentTopic] = useState(1)
  const [currentSubTopic, setCurrentSubTopic] = useState(1)

  const uploadImage = async (res, key) => {
    const data = new FormData()
    const values = Object.values(res?.target?.files)
    values.map((each) => {
      data.append('file', each)
    })
    try {
      const urlOfS =
        'https://aautimpapi.azurewebsites.net/file/multipleFileUpload'
      const responseOfFileUpload = await fetch(urlOfS, {
        method: 'POST',
        body: data,
      })
      if (responseOfFileUpload.status === 200) {
        let responseInJs = await responseOfFileUpload.json()
        if (key === 'topic') {
          onChangeTopicInputs(responseInJs?.result, 'uploadContent')
        } else {
          onChangeSubTopicInputs(responseInJs?.result, 'uploadContent')
        }
      } else {
        console.log(`status code error ${responseOfFileUpload.status}`)
      }
    } catch (err) {
      console.log('catch', err)
    }
  }

  useEffect(() => {
    setData(LessonPlanObj)
  }, [LessonPlanObj])

  const onSubmitButton = () => {
    onSubmit && onSubmit(data)
  }

  useEffect(() => {
    if (outerSubmit) {
      onSubmitButton()
    }
  }, [outerSubmit])

  const onChangeTopicInputs = (text, input) => {
    const newTopicList = data?.map((eachTopic, idx) => {
      if (idx + 1 === currentTopic) {
        switch (input) {
          case 'topicName':
            return { ...eachTopic, topicName: text }
          case 'topicDescription':
            return { ...eachTopic, topicDescription: text }
          case 'topicContent':
            return { ...eachTopic, contentData: text }
          case 'uploadContent':
            return {
              ...eachTopic,
              // uploadContent: [
              //   {
              //     fileName: '',
              //     imageUrl: text,
              //   },
              // ],
              uploadContent: [...eachTopic?.uploadContent, ...text],
            }
          default:
            return eachTopic
        }
      } else {
        return eachTopic
      }
    })
    setData(newTopicList)
  }

  const onChangeSubTopicInputs = (text, input) => {
    const newTopicList = data?.map((eachTopic, idx) => {
      if (idx + 1 === currentTopic) {
        let modifiedSubTopics = eachTopic?.subTopics?.map(
          (eachSubTopic, subIdx) => {
            if (subIdx + 1 === currentSubTopic) {
              switch (input) {
                case 'subTopicName':
                  return { ...eachSubTopic, subTopicName: text }
                case 'subTopicDescription':
                  return { ...eachSubTopic, subTopicDescription: text }
                case 'subTopicContent':
                  return { ...eachSubTopic, contentData: text }
                case 'uploadContent':
                  return {
                    ...eachSubTopic,
                    // uploadContent: [
                    //   {
                    //     fileName: '',
                    //     imageUrl: text,
                    //   },
                    // ],
                    uploadContent: [...eachSubTopic?.uploadContent, ...text],
                  }
                default:
                  return eachSubTopic
              }
            } else {
              return eachSubTopic
            }
          }
        )
        return { ...eachTopic, subTopics: modifiedSubTopics }
      } else {
        return eachTopic
      }
    })
    setData(newTopicList)
  }

  const onRemoveFile = (imgIndex, input) => {
    let update = data?.map((each, id) => {
      if (id === currentTopic - 1) {
        if (input == 'topic') {
          let filterImg = each?.uploadContent.filter(
            (EachUpload, urlIndex) => urlIndex !== imgIndex
          )
          return { ...each, uploadContent: filterImg }
        } else {
          let updateSubTopics = each?.subTopics?.map((subEach, subIndex) => {
            if (subIndex === currentSubTopic - 1) {
              let filterImg = subEach?.uploadContent.filter(
                (subEachUpload, urlIndex) => urlIndex !== imgIndex
              )
              return { ...each, uploadContent: filterImg }
            }
            return subEach
          })
          return { ...each, subTopics: updateSubTopics }
        }
      }
      return each
    })
    setData(update)
  }

  const onDeleteTopic = (indexValue) => {
    let l = data?.length
    let temp = data?.filter((each, index) => index !== indexValue)
    setData(temp)
    if (currentTopic === l) {
      setCurrentTopic(currentTopic - 1)
    }
  }

  const onDeleteSubTopic = (indexValue) => {
    let temp = data?.map((each, index) => {
      if (index === currentTopic - 1) {
        let l = each?.subTopics?.length
        let subTemp = each?.subTopics?.filter(
          (subEach, subIndex) => subIndex !== indexValue
        )
        if (currentSubTopic === l) {
          setCurrentSubTopic(currentSubTopic - 1)
        }
        return { ...each, subTopics: subTemp }
      }
      return each
    })
    setData(temp)
  }

  const inputField = (each, input) => {
    return (
      <div>
        <h5 style={{ marginBottom: 10 }}>
          {input === 'topic' ? 'Topic Name :' : 'SubTopic Name :'}
        </h5>
        <input
          className='input'
          placeholder={input === 'topic' ? 'Topic Name' : 'SubTopic Name'}
          style={{
            flex: 1,
            width: '99.3%',
          }}
          value={input === 'topic' ? each.topicName : each.subTopicName}
          onChange={(e) =>
            input === 'topic'
              ? onChangeTopicInputs(e.target.value, 'topicName')
              : onChangeSubTopicInputs(e.target.value, 'subTopicName')
          }
        />
        <h5 style={{ marginBottom: 10 }}>
          {input === 'topic' ? 'Topic Description :' : 'SubTopic Description :'}
        </h5>
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
          name='description'
          placeholder='Description'
          value={
            input === 'topic' ? each.topicDescription : each.subTopicDescription
          }
          onChange={(e) =>
            input === 'topic'
              ? onChangeTopicInputs(e.target.value, 'topicDescription')
              : onChangeSubTopicInputs(e.target.value, 'subTopicDescription')
          }
        ></textarea>
      </div>
    )
  }

  const editor = (each, input) => {
    return (
      <>
        <h5 style={{ marginBottom: 10 }}>Content :</h5>
        <Editor
          value={each?.contentData}
          onChange={(e) =>
            input === 'topic'
              ? onChangeTopicInputs(e, 'topicContent')
              : onChangeSubTopicInputs(e, 'subTopicContent')
          }
        />
      </>
    )
  }

  const fileUpload = (each, input) => {
    let hadImages = each?.uploadContent?.length > 0
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {hadImages &&
            each?.uploadContent?.map((eachImg, imgIndex) => (
              <div style={{}}>
                <img
                  src={eachImg}
                  alt=''
                  style={{
                    height: 94,
                    width: 100,
                    marginRight: 10,
                    marginBottom: 10,
                  }}
                />
                <button
                  style={{
                    position: 'absolute',
                    marginLeft: -25,
                    marginTop: -10,
                    borderRadius: 40,
                    borderWidth: 0,
                    color: 'red',
                    transform: 'rotate(45deg)',
                  }}
                  // className='remove-button'
                  onClick={() => onRemoveFile(imgIndex, input)}
                >
                  +
                </button>
              </div>
            ))}
        </div>
        <div
          style={{
            marginBottom: 20,
            width: hadImages ? 100 : 200,
            height: 94,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px #8687a7 dashed',
            borderRadius: 5,
          }}
        >
          <input
            type='file'
            name='file'
            id='file'
            multiple={true}
            accept='audio/*,audio/*,image/*,application/*,text/*,.js,.c,.py,.cpp'
            className='inputfile'
            style={{
              height: 94,
              width: hadImages ? 100 : 200,
            }}
            onChange={(e) => {
              if (e.target.value !== '') {
                input === 'topic'
                  ? uploadImage(e, 'topic')
                  : uploadImage(e, 'subTopic')
              }
            }}
          />
          <h5
            htmlFor='file'
            style={{
              marginLeft: hadImages ? 43 : 35,
              marginTop: hadImages ? 33 : 40,
              color: '#8687a7',
              fontSize: hadImages ? 22 : 14,
            }}
          >
            <p>{hadImages ? '+' : 'Upload Media & Files'}</p>
          </h5>
        </div>
      </div>
    )
  }

  const mainFunction = (each, input, key) => {
    return (
      <div id={key}>
        {inputField(each, input)}
        {editor(each, input)}
        {fileUpload(each, input)}
      </div>
    )
  }
  const topicLength = data?.length
  const subTopicLength = data?.[currentTopic - 1]?.subTopics?.length
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {[...new Array(topicLength)]?.map((each, index) => (
          <div
            style={{
              flexDirection: 'row',
              position: 'relative',
            }}
          >
            <button
              style={{
                height: 30,
                width: 65,
                borderRadius: 5,
                marginRight: 10,
                marginBottom: 15,
                borderStyle: 'solid',
                borderWidth: currentTopic === index + 1 ? 0 : 1,
                backgroundColor:
                  currentTopic === index + 1 ? '#3133b1' : 'transparent',
                color: currentTopic === index + 1 ? 'white' : 'black',
                position: 'relative',
              }}
              onClick={() => {
                setCurrentTopic(index + 1)
                setCurrentSubTopic(1)
              }}
            >
              Topic {index + 1}
            </button>
            {topicLength > 1 && (
              <button
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 50,
                  color: 'red',
                  borderRadius: 40,
                  borderWidth: 0,
                  transform: 'rotate(45deg)',
                }}
                onClick={() => onDeleteTopic(index)}
              >
                +
              </button>
            )}
          </div>
        ))}
        <div>
          <button
            style={{
              height: 30,
              width: 65,
              borderRadius: 5,
              marginRight: 10,
              marginBottom: 15,
              borderStyle: 'solid',
              border: '2px #8687a7 dashed',
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#8687a7',
            }}
            onClick={() => {
              setData([...data, topicObject])
            }}
          >
            +
          </button>
        </div>
      </div>

      {data?.map((each, index) =>
        currentTopic === index + 1
          ? mainFunction(each, 'topic', `topic ${index}`)
          : null
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: subTopicLength === 0 ? 'column' : 'row',
          flexWrap: 'wrap',
        }}
      >
        {[...new Array(subTopicLength)]?.map((each, index) => (
          <div style={{ flexDirection: 'row', position: 'relative' }}>
            <button
              style={{
                height: 30,
                width: 100,
                borderRadius: 5,
                marginRight: 10,
                marginBottom: 15,
                borderStyle: 'solid',
                borderWidth: currentSubTopic === index + 1 ? 0 : 1,
                backgroundColor:
                  currentSubTopic === index + 1 ? '#3133b1' : 'transparent',
                color: currentSubTopic === index + 1 ? 'white' : 'black',
              }}
              onClick={() => setCurrentSubTopic(index + 1)}
            >
              Sub Topic {index + 1}
            </button>
            <button
              style={{
                position: 'absolute',
                top: -10,
                left: 85,
                color: 'red',
                borderRadius: 40,
                borderWidth: 0,
                transform: 'rotate(45deg)',
              }}
              onClick={() => onDeleteSubTopic(index)}
            >
              +
            </button>
          </div>
        ))}
        {subTopicLength === 0 && <h5>Add SubTopic :</h5>}
        <button
          style={{
            height: 30,
            width: 65,
            borderRadius: 5,
            marginRight: 10,
            marginBottom: 15,
            borderStyle: 'solid',
            border: '2px #8687a7 dashed',
            backgroundColor: 'transparent',
            fontSize: 15,
            color: '#8687a7',
          }}
          onClick={() => {
            let modification = data?.map((each, index) => {
              if (index + 1 === currentTopic) {
                let temp = [...each.subTopics, subTopicObject]
                return { ...each, subTopics: temp }
              }
              return each
            })
            setData(modification)
            subTopicLength === 0 && setCurrentSubTopic(1)
          }}
        >
          +
        </button>
      </div>
      {data?.length > 0 &&
        data[currentTopic - 1]?.subTopics?.map((subEach, subIndex) => {
          if (currentSubTopic === subIndex + 1) {
            return mainFunction(subEach, 'subTopic', `sub ${subIndex}`)
          } else {
            return null
          }
        })}
      {outerSubmit === undefined && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              height: 30,
              width: 100,
              borderRadius: 5,
              borderWidth: 0,
              backgroundColor: '#3133b1',
              color: 'white',
            }}
            onClick={() => onSubmitButton()}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default LessonPlan

LessonPlan.propTypes = {
  primary: PropTypes.string,
  LessonPlanObj: PropTypes.array,
  onSubmit: PropTypes.func,
  outerSubmit: PropTypes.bool,
}

LessonPlan.defaultProps = {
  primary: 'Testing',
  LessonPlanObj: tempData,
  onSubmit: undefined,
  outerSubmit: undefined,
}
