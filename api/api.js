/* const api = async() => {
    try{
        const res = await fetch ('');
        const data = await res.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }

}
export default{
    api
} */

const getapi = async ()=>{
    let config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    let resp = await(await fetch('http://localhost/SkylAb-177/php/api.php', config)).json();
    console.log(resp);
}
export default{
    getapi
}

/* http://localhost/SkylAb-177/php/api.php */


/* http://localhost/SpUkM01-087/php/api.php*/