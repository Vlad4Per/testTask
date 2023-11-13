import React, {memo} from 'react';
import {Handle, Position, useStore} from 'reactflow';
import './App.css'
import { BsFillDatabaseFill } from "react-icons/bs";

const nodeItself ={
    width: 100,
    height: 55,
    backgroundColor: '#1A1A1A',
    borderRadius: '10%',
    border: '1px solid teal'
};


const dragHandleStyle = {
    display: 'inline-block',
    width: 55,
    height: 25,
    position: "absolute",
    margin: "auto",
    fontSize:"10px",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    borderRadius: '15%',
};


const connectionNodeIdSelector = (state) => state.connectionNodeId;

const onConnect = (params) => console.log('handle onConnect', params);

function DragHandleNode() {
    const connectionNodeId = useStore(connectionNodeIdSelector);

    const isConnecting = !!connectionNodeId;
    const label = "Node";

    return (
        <div className="customNode">
            {!isConnecting && (
                <Handle className="customHandle" position={Position.Left} type="source" onConnect={onConnect}/>
            )}

            <Handle
                className="customHandle"
                position={Position.Right}
                type="target"
                isConnectableStart={false}
            />
            <div style={nodeItself}>
                <span className="custom-drag-handle" style={dragHandleStyle}>
                    <BsFillDatabaseFill/>
                    <br/>
                    {label}
                </span>

            </div>
        </div>
    );
}

export default memo(DragHandleNode);