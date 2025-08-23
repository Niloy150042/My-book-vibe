import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center w-[1000px]  mx-auto">
          <img className="" src="/src/assets/images/Error.gif" alt="" />
          <button onClick={()=>navigate(-1)} className="btn btn-error text-white" > Go -Back </button>        
        </div>
    );
};

export default ErrorPage;