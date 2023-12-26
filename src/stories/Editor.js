import JoditEditor from 'jodit-react'
const editorProps = {
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  maxHeight: 400,
  buttons:
    'bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut',
  uploader: {
    insertImageAsBase64URI: false,
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    withCredentials: false,
    format: 'json',
    method: 'POST',
    url: 'https://aautimpapi.azurewebsites.net/file/multipleFileUpload',
    buildData: function (res) {
      const data = new FormData()
      let file = res.get('files[0]')
      data.append('file', file)
      return data
    },
    isSuccess: function (resp) {
      return resp && resp.error === undefined ? true : false
    },
    getMsg: function (resp) {
      return resp.msg.join !== undefined ? resp.msg.join(' ') : resp.msg
    },
    process: function (resp) {
      return {
        files: [resp.result[0]],
        path: '',
        baseurl: '',
        error: resp.error ? 1 : 0,
        msg: resp.message,
      }
    },
    defaultHandlerSuccess: function (data, resp) {
      const files = data.files || []
      if (files.length) {
        this.selection.insertImage(files[0], null, 250)
      }
    },
    defaultHandlerError: function (resp) {
      this.events.fire('errorPopap', this.i18n(resp.msg))
    },
  },
}

export const Editor = (props) => {
  const { value, onChange } = props
  return (
    <JoditEditor
      config={editorProps}
      value={value}
      tabIndex={1}
      onChange={(e) => onChange(e)}
    />
  )
}
