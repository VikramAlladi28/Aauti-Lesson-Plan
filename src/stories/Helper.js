export const Upload = async (res) => {
  const data = new FormData()
  const values = Object.values(res?.target?.files)
  values.map((each) => data.append('file', each))
  try {
    const urlOfS =
      'https://aautimpapi.azurewebsites.net/file/multipleFileUpload'
    const responseOfFileUpload = await fetch(urlOfS, {
      method: 'POST',
      body: data,
    })
    if (responseOfFileUpload.status === 200) {
      let responseInJs = await responseOfFileUpload.json()
      return responseInJs?.result
    } else {
      console.log('else')
    }
  } catch (err) {
    console.log('catch', err)
  }
}
