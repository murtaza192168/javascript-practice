// create object array
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

// WITHOUT CALLBACK  FUNCTIONS   ///

// get th posts

// function getPosts(){
//     setTimeout( () => {
//         let postContainer = ''
//         posts.forEach((post, index) => {
//             postContainer += `<li>${post.title}</i>`
//         })
//         document.body.innerHTML = postContainer
//     }, 1000)
// }
// getPosts()

//-------------------------------------------------------//

// create new post
// const createPost = (post) =>
// {
//     setTimeout( () => {
        
//             posts.push(post)
        
//     }, 2000)
// }
// createPost({title: 'sunrise post', description: 'Sunrise point, Matheran'})
  
   // The problem here is by the time the createPost is taking a way to longer than the getPost setTimeOut, for that reason newPost is not able to be inserted in the innerHTML bcz the page is till that time painted 
   // so 2000 > 1000
   // So to overcome this problem, we have to use callback functions


//------- getPost and CreateNewPost with CALLBACK FUNC (ASYNC PROGRAMMING) --------------------//

const getPosts = () => {setTimeout(() => {
    let postContainer = ''
    posts.forEach((post, index) => {
        postContainer += `<li>${post.title}</li>`
        
    })
    document.body.innerHTML = postContainer;
}, 1000)}


const createPost = (post, callback) =>
{
    setTimeout( () => {
        
            posts.push(post)
            // callback function invokes here...
            callback() // the getPosts function will be used as a callback func
        
    }, 2000)
}
createPost({title: 'sunrise post', description: 'Sunrise point, Matheran'}, getPosts)




