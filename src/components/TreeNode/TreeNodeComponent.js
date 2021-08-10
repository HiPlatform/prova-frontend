import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"


const TreeNodeComponent = ({ id, name, level, parentChecked, setIndeterminate, children }) => {
    const node      = useRef()
    const checkbox  = useRef()
    const [ checked, setChecked ] = useState( parentChecked )
    const [ expand, setExpand ]   = useState(false)

    useEffect( () =>  setChecked( parentChecked ), [parentChecked])
    useEffect( () => node.current.scrollIntoView(true), [expand])

    useEffect( () => {
        if( sessionStorage.getItem(id) )
        {
            setChecked( sessionStorage.getItem(id) === 'true' )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div ref={node} className="treenode">
            <div className="treenode__title py-3 px-4 d-flex justify-content-between" role="button">
                <div className="w-100">
                    <div className="custom-control custom-checkbox mr-3" style={{ marginLeft: 30 * level }} onClick={ () => {
                        setIndeterminate()
                        checkbox.current.indeterminate = false
                        setChecked(!checked)
                        sessionStorage.setItem(id, !checked)
                        Object.values(children).forEach( ({id}) => sessionStorage.removeItem(id) )
                    }}>
                        <input ref={checkbox} type="checkbox" className="custom-control-input" id={id} name={name} checked={!!checked} onChange={ () => null }  />
                        <label className="custom-control-label events-none" htmlFor={id}>{name}</label>
                    </div>
                </div>

                {Object.keys(children).length > 0 ? (
                    <span onClick={ () => setExpand( !expand ) }> 
                        {expand ? (
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none"> <path d="M18.0115 7.96919L9.98845 2.00005L2.01161 8.03081" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                        ) : (
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none"> <path d="M1 1L9 7L17 1" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                        )} 
                    </span>
                ): null}
            </div>

            {expand && (
                <div className="treenode__children">{
                    Object.values(children).map((props, i) => <TreeNodeComponent key={i} {...props} parentChecked={checked} setIndeterminate={ () => checkbox.current.indeterminate = true } /> )
                }</div>
            )}
        </div>
    )
}

TreeNodeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    parentChecked: PropTypes.any,
    setIndeterminate: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}
export default React.memo(TreeNodeComponent)
