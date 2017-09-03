export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return Object.assign({}, state, {action: action.hasErrored});
        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return Object.assign({}, state, {action: action.isLoading});
        default:
            return state;
    }
}

export const items = (state = [], action) => {
    //sconsole.log(action.items);
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, {items: action.items});
        default:
            return state;
    }
}