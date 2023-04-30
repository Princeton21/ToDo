import { AnyAction } from "@reduxjs/toolkit"

export const mobileInitialState = {
    isMobile: window.innerWidth < 768
}

const mobileReducer = (state = mobileInitialState, action: AnyAction) => {
    switch (action.type) {
        case 'SET_MOBILE_VIEW':
            return {
                ...state,
                isMobile: action.payload
            }
        default:
            return state
    }
}
export default mobileReducer