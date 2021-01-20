import React from 'react';

const personsContext = React.createContext({
    persons: [],
    isReadOnly: false,
    readOnly: () => {},
    onCreate: () => {},
    onDelete: () => {}
});

export default personsContext;