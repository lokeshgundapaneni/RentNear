const form=document.querySelector(".contact");
form.addEventListener("submit",handle);
const info=[];
function handle(e)
{
    e.preventDefault();
    const name=document.querySelector("input[name='name']").value;
    const email=document.querySelector("input[name='email']").value;
    const message=document.querySelector("textarea[name='message']").value;
    if( info.push({name,email,message}))
    {
        console.log(info);
        const successMessage=document.querySelector(".successMessage");
        successMessage.textContent="Your message has been sent successfully!";
        setTimeout(()=>{
            successMessage.textContent="";
        },3000)
        form.reset();
    }
}