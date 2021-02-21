export const logger = () => {
    return next => {
      return action => {
        if (!action.payload) {
          console.log('[Middleware] Dispatching', action);
        } else if (!action.payload.password) {
          console.log('[Middleware] Dispatching', action);
        } else {
          const secureAction = {...action};
          const securePayload = {...secureAction.payload};
          securePayload.password = '**********';
          secureAction.payload = securePayload;
          console.log('[Middleware] Dispatching', secureAction);
        }
        return next(action);
      }
    }
};
