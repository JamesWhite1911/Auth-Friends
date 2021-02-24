import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    id: Date.now(),
    name: '',
    age: '',
    email: '',
}

export default function Friends(props) {
    const [friend, setFriend] = useState(initialState)

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {

        axiosWithAuth()
            .post('/api/friends/', friend)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={friend.name} onChange={handleChange} />
                <br />
                <input type="text" name="age" placeholder="Age" value={friend.age} onChange={handleChange} />
                <br />
                <input type="text" name="email" placeholder="Email" value={friend.email} onChange={handleChange} />
                <br />
                <button>Add a Friend</button>
            </form>
        </div>

    );
} 