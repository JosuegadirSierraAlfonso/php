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