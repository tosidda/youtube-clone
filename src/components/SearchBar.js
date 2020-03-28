import React, { useState } from 'react';
import {Paper, TextField} from '@material-ui/core'; 

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('')
    
    function handleSubmit(e) {
        console.log(searchTerm)
        const {onFormSubmit} = props;
        onFormSubmit(searchTerm)
        e.preventDefault();
    }

    return (
        <Paper elevation={6} style={{padding: "25px"}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={ e => setSearchTerm(e.target.value)}/>
            </form>
        </Paper>
    )
}
