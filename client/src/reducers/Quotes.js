export default (quotes = [], action) => {
    switch (action.type) {
        case 'FETCH_RANDOM':
                return quotes; 
        case 'CREATE':
            return quotes; 
        default: 
            break; 
    }
}