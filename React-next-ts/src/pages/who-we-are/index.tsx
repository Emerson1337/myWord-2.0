import React from 'react';
import { About } from '../../components/About'
import { Navbar } from '../../components/navbar';


export default function Main(props) {
    return (
        <div>
            <Navbar />
            <About />
        </div>
    )
}
