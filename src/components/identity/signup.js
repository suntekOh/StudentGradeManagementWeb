import {
    useNavigate,
    redirect
} from "react-router-dom";



export async function action() {
    alert('test');
    return redirect('/');
}