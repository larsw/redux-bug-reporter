// /* global fetch btoa */
// require('isomorphic-fetch')
// import parser from 'ua-parser-js'
//
// const createSubmit = (config) => {
//   // let {key, ...rest} = config
//   // let jira = new JiraClient(rest)
//
//   let key = 'TP'
//   let host = 'drewschuster.atlassian.net'
//   let username = 'notausername'
//   let password = 'notapassword'
//
//   return (newBug) => {
//     let {useragent, notes, description, screenshotURL, reporter, actions, initialState, state, consoleErrors, meta, windowDimensions, windowLocation} = newBug
//     try {
//       actions = JSON.stringify(actions)
//       state = JSON.stringify(state)
//       initialState = JSON.stringify(initialState)
//       meta = JSON.stringify(meta)
//     } catch (e) {
//       return new Promise((resolve, reject) => {
//         reject(e)
//       })
//     }
//     var { name: uaName, version: uaVersion } = parser(useragent).browser
//     let summary = `${description}`
//     let body = `h1. Notes
// ${notes}
//
// h1. Meta information
// _Bug filed by_: ${reporter}
// _Screenshot URL (if added)_: ${screenshotURL}
// _Console Errors_: {code:javascript}${consoleErrors}{code}
// _URL_: ${windowLocation}
// _Window Dimensions_: ${windowDimensions}
// _Meta information_: ${meta}
// _User Agent_: ${uaName} version ${uaVersion}
//
// Playback script:
// {code:javascript}window.bugReporterPlayback(${actions},${initialState},${state},100){code}
//
// Bug submitted through [redux-bug-reporter|https://github.com/dtschust/redux-bug-reporter]
// `
//     let issue = {
//       fields: {
//         project: {
//           key: key
//         },
//         summary: 'summary',
//         description: 'body',
//         issuetype: {
//           name: 'Bug'
//         }
//       }
//     }
//     return fetch('https://' + host + '/rest/api/2/project', {
//       method: 'get',
//       headers: {
//         'Accept': 'application/json',
//         // 'Authorization': 'Basic ' + btoa('' + username + ':' + password),
//         'Authorization': 'Basic ZHRzY2h1c3RAZ21haWwuY29tOjlLVGlvcFVxUVF5UHRGVG1DWm9iV0t3VWptSw==',
//         'Content-Type': 'application/json'
//       }
//       // body: JSON.stringify(issue)
//     }).then(function (response) {
//       if (!response.ok) {
//         throw Error(response.statusText)
//       }
//       return response.json()
//     }).then(function (response) {
//       return response && response.self
//     })
//   }
// }
// export default createSubmit
