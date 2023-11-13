import React, {useCallback} from 'react';
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    MiniMap,
    Controls,
    useEdgesState,
    useNodesState
} from "reactflow";
import 'reactflow/dist/style.css';


import DragHandleNode from './DragHandleNode.jsx';
import FloatingEdge from './FloatingEdge';

const nodeTypes = {
    dragHandleNode:DragHandleNode,
};
const edgeTypes = {
    floating: FloatingEdge,
};

const connectionLineStyle = {
    stroke: 'white',
    type:'straight'
};
const defaultEdgeOptions = {
    style: {
        stroke: 'white'
    },
    type:'floating'
};

const initialNodes = [
    {
        id: "1",
        position: {x: 100, y: 20},
        type: 'dragHandleNode',
        dragHandle: '.custom-drag-handle',
    },
    {
        id: "2",
        position: {x: 100, y: 100},
        type: 'dragHandleNode',
        dragHandle: '.custom-drag-handle',
    },
]

function InitialState() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );
    const addNodes = () => {
        const newNodeId = `${nodes.length + 1}`;
        const newNodeX = nodes[nodes.length-1].position.x;
        const newNodeY = nodes[nodes.length-1].position.y+80;
        const newNode = {
            id: newNodeId,
            position: {x: newNodeX, y: newNodeY},
            data: {label: `Node ${newNodeId}`},
            type: 'dragHandleNode',
            dragHandle: '.custom-drag-handle',
        };
        setNodes((prev) => [...prev, newNode]);
    }
    return (
        <div style={{width:"100%",height: "100%", textAlign: "center"}}>
            <button style={{display:"inline-block",width:"90%",margin:"10px"}} onClick={addNodes}>Add Node</button>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                connectionLineStyle={connectionLineStyle}
                defaultEdgeOptions={defaultEdgeOptions}
            >
                <Background variant="dots" gap={15} size={1}/>
                <MiniMap/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}

export default InitialState;