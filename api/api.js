const api = async() => {
    try{
        const res = await fetch ('http://localhost/SpUkM01-087/php/api.php');
        const data = await res.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }

}
export default{
    api
}