const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // forEach-----------------------------------
    // simple forLoop
    // for (let i = 0; i<companies.length; i++){
    //     console.log(companies[i]);
    // }
    
    // using forEach 
    // companies.forEach((company, index) => {
    //     console.log(company);
    // })


  //filter--------------------------------------
    // This method will return a new array from the existing/original array based on the condition passed

     // using simple forLoop
    //  const canParticipate = []
    //   for(let i=0; i<ages.length;i++){
    //     if(ages[i] > 21){
    //         canParticipate.push(ages[i])
    //     }
    // }console.log(canParticipate);
     
    // using filter method
    // const filteredData = ages.filter((age) => {
    //     if(age > 21){
    //         return true 
    //     }
    // })
    // console.log(filteredData); 

    // oneLiner
      const filteredData = ages.filter(age => age >= 21) // shorthand
      console.log(filteredData); 
      
      // filter the companies that are retail category
    //   const retailCompanies = companies.filter(company =>{
    //     if(company.category === 'Retail'){
    //         return true
    //     }
    //   })
    //   console.log(retailCompanies);
      
     // short hand
    //    const retailCompanies = companies.filter(company => (company.category === 'Retail'))
    //    console.log(retailCompanies);

     // Get the companies established in 80s
    //  const eightiesCompanies = companies.filter(company => company.start >= (1980) && company.start <(1990))  
    //  console.log(eightiesCompanies);

      // Get  the companies that lasted for 10 years
    //   const lasted10Years = companies.filter(company => {if((company.end - company.start) >= 10){
    //     return true
    //   }})
    //   console.log(lasted10Years);
      

  //map--------------------------------------------------
      // creating new array from existing array
    // Q1) extract company names from companies array\

    //   const companyNames = companies.map(company => company.name) 
    //   console.log(companyNames);

    // edit the new array with start and end years beside it
    const companyNames = companies.map(company => {
        return ( `${company.name}, [${company.start} - ${company.end}]`)
    }) 
    console.log(companyNames);

    // take out the new array with ageSquare from ages array
    // const ageSquare = ages.map(age =>  age*age)
    // console.log(ageSquare);
    
    // ages squareRoot
    const ageSquare = ages.map(age => Math.sqrt(age))
    console.log(ageSquare);


      
  //sort-------------------------------------------------
    // Sort by company start date in ascending order ..ok
    // const sortCompanyStartDate = companies.sort((company1, company2) => 
    //     company1.start < company2.start ? -1 : 1
    //     // first element : -1  --- means that first element should come before second element (1) and visa versa..

    //  )
    // console.log(sortCompanyStartDate);

    // sort ages in ascending order
    // const ageSort = ages.sort() // if you code like only this much, then it will only consider the first digit in sorting... see, even though 5 is the smallest, it has been placed at the 4th last pos
    // console.log(ageSort); 

    // sort in a better way
    // const ageSort = ages.sort((a1, a2) => (a1 - a2))
    // console.log(ageSort);



  //reduce ---------------------------------------------
    //Q1] reduce the ages array by  getting the total age of all ages
        // normal forLoop
          let ageSum = 0
          for(let i=0; i<ages.length; i++){
            ageSum += ages[i];
          }
          
         // using reduce func
         const ageTotal = ages.reduce((total, age) =>{ return total + age}, 0)
         console.log(ageTotal);  


    //Q2] Get all the companies span and sum it up (Get total years worked for all companies)

    //1// how to get the span of each company: by subtracting their end and start years
    //2// then add those with pushing in new variable

    const totalYearsOfAllCompanies = companies.reduce((total, company) => {return total + (company.end - company.start)
    }, 0)
    console.log(totalYearsOfAllCompanies);