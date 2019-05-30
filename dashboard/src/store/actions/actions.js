import * as ACTION_TYPES from './action_types'

export const OKUNDUYAP = {
    type: ACTION_TYPES.OKUNDUYAP
}

export const okunduyap = () => {
    return {
        type: ACTION_TYPES.OKUNDUYAP
    }
}

export const content_title = (title) => {
    return {
        type: ACTION_TYPES.CONTENT_TITLE,
        payload: title
    }
}
