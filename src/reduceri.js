export const initialState={
    basket:[],
    user:null,

}


function reducer(state,action){
    // console.log(action);
    switch (action.type) {
        case 'setUser':
            return {
                ...state,
                user:action.user,
            }
        
        case 'Add':
            return {...state,
                basket:[...state.basket,action.item],
                
            };
            
            case 'Remove':


                let newBasket=[...state.basket];
                const index=state.basket.findIndex(
                    (bask)=>bask.id===action.id);
                if(index>=0){

                newBasket.splice(index,1)
                }
                else{
                    console.warn('ok bro evrything is ok');
                }
                return  {...state,
                    basket:newBasket,
                }
            
        default:
            return state;
    }
}


export default reducer;