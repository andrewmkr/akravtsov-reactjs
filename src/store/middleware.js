export const logger = () => {
    return next => {
      return action => {
        console.log('[Middleware] Dispatching', action);
        return next(action);
      }
    }
};
