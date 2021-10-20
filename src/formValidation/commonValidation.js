export const validateName = (value) => {
    console.log('name' , value)
    if(!value.name) {
        return {name: 'Name is required'};
    } else if(value.name.length <= 5) {
        return {name: 'Name is invalid'};
    }
}; 

export const validateEmail = (value) => { 
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!value.email) {
        return {email: 'Email address is required'};
    } else if (!re.test(String(value.email).toLowerCase())) {
        return {email: 'Email address is invalid'};
    } 
};

export const validatePosition = (value) => {
    if(!value.position) {
        return {position: 'Position is required'};
    }else if(value.position.length <= 5) {
        return {position: 'Position is invalid'};
    }
};