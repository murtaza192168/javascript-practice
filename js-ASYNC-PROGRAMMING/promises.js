const posts = [
    {
        title: 'sunset post',
        description: 'Sunset point, Matheran'
    },

    {
        title: 'Horse cart post',
        description: 'Horse point, Matheran'
    }
]




//------- getPost and CreateNewPost with CALLBACK FUNC (ASYNC PROGRAMMING) --------------------//

const getPosts = () => {setTimeout(() => {
    let postContainer = ''
    posts.forEach((post, index) => {
        postContainer += `<li>${post.title}</li>`
        
    })
    document.body.innerHTML = postContainer;
}, 1000)}


const createPost = (post) =>
{   // this return Promise will have a callback func inside it
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.push(post)

            //if incase you want to return an error with a msg...
            const error = false;

            if(!error){
                resolve()
            }else{
                reject('Error: Something wrong')
            }
    }, 2000)
    })
}


//    ASYNC  // AWAIT
    // So when we want to use awit, it is mandatory to label the function with await / or any data that we want to wait for to get completed concurrently
    async function asyncFuncEx(){
        await createPost({title: 'sunrise post', description: 'Sunrise point, Matheran'})
        getPosts()
        // by the time create posts is getting the data, till that time, getPosts will do their work.. no hinderance
    }
    // asyncFuncEx()


//    ASYNC  // AWAIT // FETCH

const asyncFetchEx = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await res.json()
    console.log(data);
}
asyncFetchEx()

// call the function : if in above implementation, the promise is being returned, then we can make use of .then syntax with passing the actual getPosts mrthod in it  

// createPost({title: 'sunrise post', description: 'Sunrise point, Matheran'}).then(getPosts) 

// once it resolves, then it will get the posts

                //   .catch((err) => console.log(err)) 

                //if by chnace it gets rejected, then in console, this will be printed (nice clean error)


// PROMISE: instead of calling .then, .then for every promise returned, we can use promise all functionality

// step1: Let declare and initialize promises
const promise1 = Promise.resolve('Hello, resolved!')
const promise2 = 25
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Ok, done! BYE')
})
// how fetching works..
    // we have fetched, but in order to get it in objeect array, we need to first convert it in json format using then  
    const promise4 = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
// Implementing Promise.all(..,..,..) , that takes in an array of promises
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))
