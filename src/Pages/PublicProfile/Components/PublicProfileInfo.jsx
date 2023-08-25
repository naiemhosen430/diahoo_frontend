import React, { useEffect, useState } from 'react';
import GetPublicProfile from '../../../api/GetPublicProfile';



export default function PublicProfileInfo({id}) {
    const [user, setUser] = useState([]);
    const [editableFields, setEditableFields] = useState({
        hometwon: false,
        homecity: false,
        position: false,
        relationshipstatus: false,
        gender: false,
        age: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPublicProfile(id);
            setUser(data);
        };
        fetchData();
    }, []);


    return (
        <div className='p-4'>
            {Object.keys(editableFields).map((field) => (
                <div className='py-1 flex' key={field}>
                    <span className='text-white w-3/6'>{field}</span>
                    <input
                        className='text-white bg-slate-900 w-2/6'
                        type='text'
                        value={user[field]}
                        disabled={!editableFields[field]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}
