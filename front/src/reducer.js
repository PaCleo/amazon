export const initialState = {
    basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const newBasket = [...state.basket, action.item];
            localStorage.setItem('basket', JSON.stringify(newBasket));
            return {
                ...state,
                basket: newBasket,  
            };

        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                    );

                if (index >= 0) {
                    const newBasket = [...state.basket];
                    newBasket.splice(index, 1);
                    localStorage.setItem('basket', JSON.stringify(newBasket));
                    return {
                        ...state,
                        basket: newBasket,
                    };
                } else {
                    console.warn(`Cant remove product (id: ${action.id})`);
                    return state;
                }
        default:
            return state;
    }
};

export default reducer;