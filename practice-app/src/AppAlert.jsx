import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AppAlert(){
return (
    <>
    {["1st", "2nd", "3rd"].map((variant) =>(
        <Alert key={variant} variant={variant}>
            Its your {variant} alert!
             </Alert>
    ))}
 </>
);
}
export default AppAlert;