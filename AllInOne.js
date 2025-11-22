const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.address?.city); 

console.log(user?.job?.title);

const config = {
  settings: {
    theme: "dark"
    
  }
};


console.log(config.settings.layout.type);

console.log(config.settings?.layout?.type); 
