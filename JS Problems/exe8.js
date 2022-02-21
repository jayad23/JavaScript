
// Adding a propety to an existing array of object

const users = [
    {
      name: 'Camilo',
      country: 'Peru'
    },{
      name: 'Pedro',
      country: 'Peru'
    },{
      name: 'Jorge',
      country: 'Argentina'
    },{
      name: 'Jose',
      country: 'Colombia'
    },{
      name: 'Minerva',
      country: 'Spain'
    },{
      name: 'Daniel',
      country: 'Peru'
    },{
      name: 'Grabiel',
      country: 'Argentina'
    }
]
  
  const filteredUsers = users.filter(country => country.country === 'Peru')
  
  const addingNationality = (arr)=>{
    let usersAdded = [];
    for(let i in arr){
      if(arr[i].country === 'Peru'){
        usersAdded.push(arr[i].nationality = 'Peruvian')
      } else if (arr[i].country === 'Argentina'){
        usersAdded.push(arr[i].nationality = 'Argentinian')
      } else if (arr[i].country === 'Spain'){
        usersAdded.push(arr[i].nationality = 'Spanish')
      } else if(arr[i].country === 'Colombia'){
        usersAdded.push(arr[i].nationality = 'Colombian')
      }
    }
    return usersAdded
  }
  addingNationality(users)
  console.log(users)