import React from "react"

import TreeNodeComponent from "./components/TreeNode/TreeNodeComponent"
import TreeViewSchema from "./data/data.json"

const App = () =>  (
    <div className="App mx-auto mt-5 mb-5 w-100 bg-white">{
        Object.values(TreeViewSchema).map((props, i) => <TreeNodeComponent key={i} {...props} parentChecked={false} setIndeterminate={ () => null } /> )  
    }</div>
)
export default App