import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Student = () => {
    const navigate=useNavigate()
    return (
        <>
            <h1 className='details'>Students Details</h1>  
            <button className='student' onClick={()=>navigate("/student/desc-3")}>Add New Student</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Course</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Aljo</th>
                        <td>24</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Romi</th>
                        <td>24</td>
                        <td>MERN</td>
                        <td>November</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Rexson</th>
                        <td>25</td>
                        <td>MERN</td>
                        <td>August</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Leo</th>
                        <td>26</td>
                        <td>MEAN</td>
                        <td>December</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Rodger</th>
                        <td>22</td>
                        <td>MEAN</td>
                        <td>January</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Melvin</th>
                        <td>23</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Rudolf</th>
                        <td>21</td>
                        <td>MERN</td>
                        <td>August</td>
                        <td><Link to="/student/desc-3">Edit</Link></td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default Student