import * as Sentry from '@sentry/browser'

//import actions
import {
  unsetIsLoadingApp
} from 'modules/app'
import {
  setTypeModal,
  toggleOpenModal,
  setTextModal
} from 'modules/modal'

export default function(error) {
  return dispatch => {
    const message = error.message
    Sentry.captureException(error)
    console.error(message)
    dispatch(setTypeModal(`error`))
    dispatch(setTextModal(`The server responded with the following message: ${message}. Please contact support if the problem persists.`))
    dispatch(toggleOpenModal())
    dispatch(unsetIsLoadingApp())
  }
}