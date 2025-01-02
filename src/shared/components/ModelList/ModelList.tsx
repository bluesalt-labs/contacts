//import React from 'react'
import './ModelList.css'

//type ModelListProps = {
//models?: Array<string|number|null>;
//};

//const ModelList: React.FC<ModelListProps> = (props) => {
function ModelList(props) {

    return (
        <>
            <div style={{ textAlign: "left" }}>
            <code><pre>
            { JSON.stringify(props, null, 2) }
            </pre></code>
            </div>
        </>
    )
}

export default ModelList
