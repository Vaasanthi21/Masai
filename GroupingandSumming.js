function countAndSortCategories(categories) {
  
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

 
  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) 
    .map(entry => entry[0]);    

  return sortedCategories;
}


const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const result = countAndSortCategories(input);
console.log(result); 
