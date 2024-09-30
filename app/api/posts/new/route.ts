
export const POST = async (request:any) => {
    const { userId,id,title, body } = await request.json();

    const postData = { userId,id,title, body }

    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST", // Assuming you want to POST data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        if (!response.ok) {
            return new Response("Failed to add new post", { status: 500 });        
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });  
      } catch (error) {
        console.error("Error adding post data:", error);
      }
}