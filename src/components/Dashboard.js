import React,{useState} from 'react'
import {Card,Button,Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import {Link,useHistory} from 'react-router-dom'

export default function Dashboard() {
    const [error,setError]=useState("")
    const {currentUser,logout}=useAuth()
    const history=useHistory()

    async function handlelogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }
        catch{
            setError('Failed to logout!')
        }
    }
    return (
       <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>{currentUser.email}
            <Link to="/update-profile" classname="btn btn-primary mt-3 w-100">Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-3">
            <Button variant="link" onClick={handlelogout}>LogOut</Button>
        </div>
       </>
    )
}
