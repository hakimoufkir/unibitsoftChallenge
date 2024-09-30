export const GET = async (request: any) => {
    const { id } = await request.json();
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      if (!response.ok) {
        return new Response("Post not found", { status: 404 });
      }
      
      console.log(response)
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Error fetching post:", error);
      return new Response("An error occurred", { status: 500 });
    }
  };
  

// export const PUT = async (request :any) => {
//     const { userId,id,title, body } = await request.json();

//     const postData = { userId,id,title, body } 
    
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//           method: "PATCH", // Assuming you want to POST data
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(postData),
//         });
//         if (!response.ok) {
//             return new Response("Failed to add new post", { status: 500 });        
//         }
//         const data = await response.json();
//         return new Response(JSON.stringify(data), { status: 200 });  
//       } catch (error) {
//         console.error("Error adding post data:", error);
//       }
    
// };

// export const DELETE = async (request:any) => {

//   const { userId } = await request.json();
  
//   try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
//         method: "DELETE", // Assuming you want to POST data
//         headers: {
//           "Content-Type": "application/json",
//         }});
//       if (!response.ok) {
//           return new Response("Failed to add new post", { status: 500 });        
//       }
//       const data = await response.json();
//       return new Response(JSON.stringify(data), { status: 200 });  
//     } catch (error) {
//       console.error("Error adding post data:", error);
//     }
// };