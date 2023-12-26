import { useState } from 'react'
import { Editor } from '../../Editor'
import { Button } from '../../Button'
import './TypeOne.css'
import { DottedButton } from '../../DottedButton'
import { Upload } from '../../Helper'

const defaultOption = {
  value: '',
  images: [],
}

const defaultQuestionObj = {
  question: '',
  options: [defaultOption, defaultOption],
  type: 'Multiple Choice',
}

const TypeOne = (props) => {
  const { maxNoOfQuestion = 30, role = 'SP' } = props
  const [questions, setQuestions] = useState([defaultQuestionObj])
  const [activeQuestion, setActiveQuestion] = useState(0)

  const addQuestion = () => {
    setQuestions([...questions, defaultQuestionObj])
  }

  const removeQuestion = (index) => {
    let update = questions.filter((each, id) => index !== id)
    setQuestions(update)
    if (activeQuestion >= update.length - 1) {
      setActiveQuestion(update.length - 1)
    }
  }

  const addOptions = () => {
    let update = questions.map((each, index) => {
      if (index === activeQuestion) {
        return { ...each, options: [...each?.options, defaultOption] }
      }
      return each
    })
    setQuestions(update)
  }

  const onChangeOption = (value, index) => {
    let update = questions.map((each, idx) => {
      if (idx === activeQuestion) {
        let updateOptions = each?.options?.map((subEach, subId) => {
          if (index === subId) {
            return { ...subEach, value: value }
          }
          return subEach
        })
        return { ...each, options: updateOptions }
      }
      return each
    })
    setQuestions(update)
  }

  const removeOption = (index) => {
    let update = questions.map((each, idx) => {
      if (idx === activeQuestion) {
        let updateOptions = each?.options?.filter(
          (subEach, subId) => subId !== index
        )
        return { ...each, options: updateOptions }
      }
      return each
    })
    setQuestions(update)
  }

  const setDropDown = (value) => {
    let update = questions.map((each, index) => {
      if (index === activeQuestion) {
        if (value === 'QA') {
          return { ...each, options: [], type: value }
        } else if (each?.type === 'QA') {
          return {
            ...each,
            options: [defaultOption, defaultOption],
            type: value,
          }
        }
        return { ...each, type: value }
      }
      return each
    })
    setQuestions(update)
  }

  const setQuestion = (value) => {
    let update = questions.map((each, index) => {
      if (index === activeQuestion) {
        return { ...each, question: value }
      }
      return each
    })
    setQuestions(update)
  }

  const optionsImgFile = async (e, index) => {
    let links = await Upload(e)
    let update = questions.map((each, idx) => {
      if (idx === activeQuestion) {
        let updateOptions = each?.options?.map((subEach, subId) => {
          if (index === subId) {
            return { ...subEach, images: [...subEach.images, ...links] }
          }
          return subEach
        })
        return { ...each, options: updateOptions }
      }
      return each
    })
    setQuestions(update)
  }

  const removeoptionImgFile = (index, ImgId) => {
    let update = questions.map((each, idx) => {
      if (idx === activeQuestion) {
        let updateOptions = each?.options?.map((subEach, subId) => {
          if (index === subId) {
            let filterImg = subEach.images?.filter(
              (eachImg, ImgIndex) => ImgIndex !== ImgId
            )
            return { ...subEach, images: filterImg }
          }
          return subEach
        })
        return { ...each, options: updateOptions }
      }
      return each
    })
    setQuestions(update)
  }

  const onSubmitButton = () => {
    console.log(questions, 'ssss')
  }

  // const editor = Jodit.make('#editor')

  return (
    <div className='main-div'>
      <h5 style={{ marginBottom: 10 }}>Assignment Creation</h5>

      <div className='hideScroll scroll-div'>
        {questions.map((each, index) => {
          return (
            <Button
              title={`Question ${index + 1}`}
              active={index === activeQuestion}
              showRemove={
                role.toLowerCase() === 'sp' ? questions.length > 1 : false
              }
              onClick={() => setActiveQuestion(index)}
              onRemove={() => removeQuestion(index)}
            />
          )
        })}
        {role.toLowerCase() === 'sp' && questions.length < maxNoOfQuestion && (
          <DottedButton onClick={() => addQuestion()} />
        )}
      </div>
      {role.toLowerCase() === 'sp' && (
        <div className='dropDown-div'>
          <select
            className='select-container'
            value={questions[activeQuestion].type}
            onChange={(e) => setDropDown(e.target.value)}
          >
            <option value='Multiple Choice'>Multiple Choice</option>
            <option value='Check Boxes'>Check Boxes</option>
            <option value='QA'>QA</option>
          </select>
        </div>
      )}
      <h5 style={{ marginBottom: 10 }}>Question : </h5>
      {role.toLowerCase() === 'sp' ? (
        <Editor
          value={questions[activeQuestion]?.question}
          onChange={(e) => setQuestion(e)}
        />
      ) : (
        <iframe
          className='iframe-style'
          srcDoc={questions[activeQuestion]?.question}
        ></iframe>
      )}
      {questions[activeQuestion]?.type !== 'QA' && (
        <div>
          <h5>Options :</h5>
          <div>
            {questions[activeQuestion]?.options.map((each, index) => {
              if (role.toLowerCase() === 'sp') {
                return (
                  <div className='option-div'>
                    <input
                      className='option-input-style'
                      value={each?.value}
                      onChange={(e) => onChangeOption(e.target.value, index)}
                      placeholder={`Option ${index + 1}`}
                      type='text'
                    />
                    {each?.images?.length > 0 ? (
                      each?.images?.map((each, imgIndex) => {
                        return (
                          <div style={{ position: 'relative' }}>
                            <img
                              src={each}
                              alt=''
                              style={{
                                height: 40,
                                width: 40,
                                marginLeft: 10,
                              }}
                            />
                            <button
                              className='remove-button'
                              onClick={() =>
                                removeoptionImgFile(index, imgIndex)
                              }
                            >
                              +
                            </button>
                          </div>
                        )
                      })
                    ) : (
                      <>
                        <label
                          style={{
                            border: '1px solid gray',
                            color: 'gray',
                            height: 30,
                            width: 120,
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 5,
                            padding: 5,
                            marginLeft: 10,
                          }}
                          for='file'
                          class='btn'
                        >
                          Upload Img/Files
                        </label>
                        <input
                          type='file'
                          name='file'
                          id='file'
                          style={{ visibility: 'hidden', width: '0px' }}
                          // multiple={true}
                          accept='audio/*,audio/*,image/*,application/*,text/*,.js,.c,.py,.cpp'
                          onChange={(e) => {
                            if (e.target.value !== '') {
                              optionsImgFile(e, index)
                            }
                          }}
                        />
                      </>
                    )}
                    {questions[activeQuestion]?.options?.length > 2 && (
                      <button
                        className='option-remove-btn'
                        onClick={() => removeOption(index)}
                      >
                        +
                      </button>
                    )}
                  </div>
                )
              } else {
                return (
                  <div className='EUoption-div'>
                    <input
                      // className='input-radio'
                      style={{ fontSize: '100px' }}
                      type={
                        questions[activeQuestion]?.type === 'Multiple Choice'
                          ? 'radio'
                          : 'checkbox'
                      }
                      id={index}
                      name='fav_language'
                      value={each?.value}
                      onClick={(value) =>
                        console.log(value.target.value, 'pppppbbbb')
                      }
                    />
                    <label style={{ marginLeft: 15 }} for={index}>
                      {each?.value}
                    </label>
                    <br></br>
                    {each?.images?.length > 0 &&
                      each?.images?.map((each, imgIndex) => {
                        return (
                          <img
                            src={each}
                            alt=''
                            style={{
                              height: 60,
                              width: 60,
                              marginLeft: 30,
                              marginTop: 10,
                            }}
                          />
                        )
                      })}
                    <br></br>
                  </div>
                )
              }
            })}
          </div>
          {role.toLowerCase() === 'sp' &&
            questions[activeQuestion]?.options?.length < 5 && (
              <button className='option-add-btn' onClick={() => addOptions()}>
                +
              </button>
            )}
        </div>
      )}
      {role.toLowerCase() !== 'sp' &&
        questions[activeQuestion]?.type === 'QA' && (
          <>
            <h5 style={{ marginBottom: 10 }}>Answer : </h5>
            <Editor value={''} onChange={(e) => console.log('answer', e)} />
          </>
        )}
      <div className='submit-button-div'>
        <Button title={'Submit'} onClick={() => onSubmitButton()} />
      </div>
    </div>
  )
}

export default TypeOne
