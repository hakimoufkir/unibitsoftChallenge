export const GET = async (request) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        return new Response("Failed to fetch", { status: 500 });        
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });  
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
