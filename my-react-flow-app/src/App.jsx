// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';

import 'reactflow/dist/style.css';
import InitialState from "./InitialState.jsx";


export default function App() {

    return (
        <div style={{ width: '100vw', height: '93vh',top: "0vh", position:"absolute"}}>
            <InitialState/>
        </div>
    );
}