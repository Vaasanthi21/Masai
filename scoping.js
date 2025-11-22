if (true) {
    let x = 10;
    var y = 20;
}
console.log(y); 
console.log(x);

const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone); 


const config = {
    settings: {
        theme: "dark"
        
    }
};


console.log(config.settings.layout.type); 


console.log(config.settings?.layout?.type);
