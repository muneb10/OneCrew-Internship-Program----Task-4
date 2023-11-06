import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

const Dashboard = (props) => {
    const navigate = useNavigate();
    const logoutHandler = () => {

        navigate('/');
    }
    return (
        <Fragment>
            <div className="h-screen bg-slate-900 flex ">
                <div className=" left w-48  h-screen bg-slate-950 rounded-tr-3xl shadow-2xl">
                    <div className="content flex flex-col justify-center items-center">
                        <h1 className=" logo flex justify-center items-center font-bold text-white text-3xl mt-0 bg-slate-800 w-48 p-3 rounded-tr-3xl">oneCrew</h1>
                        <ul className="list mt-10">
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400 focus:ring-2 focus:ring-blue-500 focus:outline-none">Dashboard</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Profile</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Reports</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Tasks</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Messages</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Celender</div></li>
                            <li className="mt-2"><div className="tabs w-28 h-10 rounded-2xl flex justify-center items-center text-white font-bold cursor-pointer hover:text-yellow-400">Settings</div></li>

                        </ul>
                        <button onClick={logoutHandler} className="w-28 h-10 font-bold text-white mt-20 bg-red-600 rounded-2xl hover:bg-red-700 hover:font-bold  hover:transition hover:duration-500">Logout</button>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center ml-64 h-fit p-4 border border-blue-400 mt-56">
                    <h1 className="text-4xl text-white font-bold">Welcome to your Dashboard</h1><br />
                    <h3 className="text-4xl text-red-700">Name:<span className="ml-1 text-yellow-400">{props.data.__name}</span></h3><br />
                    <h3 className="text-4xl text-red-700">Email:<span className="ml-2 text-yellow-400">{props.data.__email}</span></h3>

                </div>
            </div>

        </Fragment>
    )
}

export default Dashboard;