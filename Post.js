const form=document.getElementsByTagName("form");
const section=document.querySelector("section");

form[0].addEventListener("submit",handle);


function handle(e)
{
    e.preventDefault();

    const name=document.getElementById("name").value;
    const category=document.getElementById("category").value;
    const price=document.getElementById("price").value;
    const location=document.getElementById("location").value;
    const description=document.getElementById("description").value;
    const image=document.getElementById("images").value;
    const Owner_name=document.getElementById("ownername").value;
    const mobile=document.getElementById("mobilenumber").value;
    const  newId = data.length > 0
    ? Math.max(...data.map(user => user.id)) + 1
    : 1;
    
    const user = {
        id: newId,
        name: name,
        category: category,
        price: price,
        location: location,
        description: description,
        image: image,
        Owner_name: Owner_name,
        mobile: mobile
    };

    if(data.push(user))
    {
        document.querySelector(".success-message").textContent = "Item added successfully!";
        setTimeout(()=>{
            document.querySelector(".success-message").textContent = "";
        }, 3000)
        
    }
    
    form[0].reset();
}