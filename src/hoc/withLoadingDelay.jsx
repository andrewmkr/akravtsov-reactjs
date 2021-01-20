import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const withLoadingDelay = WrappedComponent => props => {
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect(() => {
      setTimeout(() => {
          setIsLoading( false );
      }, 2000)
    }, []);
    
    return isLoading ? <Spinner /> : <WrappedComponent { ...props } />;

};
  
export default withLoadingDelay;